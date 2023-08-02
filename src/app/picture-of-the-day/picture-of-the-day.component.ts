import {Component, OnDestroy, OnInit} from '@angular/core';
import {NasaApodService} from "../services/nasa-apod.service";
import {catchError, map, of, Subscription, tap} from "rxjs";
import {FormControl} from "@angular/forms";
import * as moment from "moment/moment";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {Moment} from "moment/moment";

@Component({
  selector: 'app-picture-of-the-day',
  templateUrl: './picture-of-the-day.component.html',
  styleUrls: ['./picture-of-the-day.component.scss']
})
export class PictureOfTheDayComponent implements OnInit, OnDestroy {
  astronomyPicture: any;
  errorMessage!: string;
  date: FormControl = new FormControl(moment());
  minDate: Moment = moment('1995-06-16');
  maxDate: Moment = moment();
  apodSubscription!: Subscription;

  constructor(
    private apodService: NasaApodService,
  ) {}

  ngOnInit() {
    this.getPictureOfTheDay();

    this.date.valueChanges.subscribe(() => {
      if(this.date.valid) {
        this.getPictureOfTheDay();
      }
    });
  }

  getPictureOfTheDay(): void {
    this.astronomyPicture = null;

    this.apodSubscription = this.apodService.getAstronomyPictureOfTheDay(this.date.value.format('YYYY-MM-DD')).pipe(
      tap((data) => console.log('Raw Data:', data)),
      catchError((error) => {
        this.errorMessage = 'Error fetching data from NASA API.';
        return of(null);
      }),
      map((data: any) => {
        return {
          title: data.title,
          date: data.date,
          explanation: data.explanation,
          imageUrl: data.url,
          hdUrl: data.hdurl,
        };
      })
    ).subscribe({
      next: (apodData: object) => {
        this.astronomyPicture = apodData;
        this.errorMessage = '';
      },
      error: (error) => this.errorMessage = 'Error processing data.'
    });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // this.getPictureOfTheDay();
  }

  ngOnDestroy() {
    this.apodSubscription.unsubscribe();
  }
}
