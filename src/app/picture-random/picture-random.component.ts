import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {catchError, map, mergeMap, of, Subscription, take, tap, toArray} from "rxjs";
import {NasaApodService} from "../services/nasa-apod.service";

@Component({
  selector: 'app-picture-random',
  templateUrl: './picture-random.component.html',
  styleUrls: ['./picture-random.component.scss']
})
export class PictureRandomComponent implements OnInit, OnDestroy {
  imagesCount: FormControl = new FormControl<number>(1);
  errorMessage: string = '';
  astronomyPictures: any[] = [];
  randomPictureSubscription!: Subscription;

  constructor(
    private apodService: NasaApodService
  ) {}

  ngOnInit() {
    this.getRandomPictures();
  }

  getRandomPictures(): void {
    this.astronomyPictures = [];
    this.randomPictureSubscription = this.apodService.getRandomImages(this.imagesCount.value).pipe(
      tap((data) => console.log('Raw Data:', data)),
      catchError((error) => {
        this.errorMessage = 'Error fetching data from NASA API.';
        return of([]);
      }),
      map((data: any[]) => {
        return data.map(apodData => {
          return {
            title: apodData.title,
            explanation: apodData.explanation,
            imageUrl: apodData.url,
            date: apodData.date,
          };
        });
      })
    ).subscribe({
      next: (apodData) => {
        this.astronomyPictures = apodData;
        this.errorMessage = '';
      },
      error: (error) => this.errorMessage = 'Error processing data.'
    });
  }

  ngOnDestroy() {
    this.randomPictureSubscription.unsubscribe();
  }
}
