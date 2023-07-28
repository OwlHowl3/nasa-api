import { Component } from '@angular/core';
import {NasaApodService} from "./services/nasa-apod.service";
import {catchError, tap, map, of, mergeMap, take, toArray} from "rxjs";
import {faCalendar, faHardDrive, IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {faEarthEurope} from '@fortawesome/free-solid-svg-icons';
import {NasaImageVideoLibraryService} from "./services/nasa-image-video-library.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCalendar: IconDefinition = faCalendar;
  faHardDrive: IconDefinition = faHardDrive;
  faEarthEurope: IconDefinition = faEarthEurope;

  astronomyPicture: any;
  astronomyPictures: any[] = [];
  errorMessage!: string;

  constructor(
    private apodService: NasaApodService,
    private imagesVideosService: NasaImageVideoLibraryService
  ) {}

  ngOnInit() {
    // this.apodService.getAstronomyPictureOfTheDay().pipe(
    //   tap((data) => console.log('Raw Data:', data)),
    //   catchError((error) => {
    //     this.errorMessage = 'Error fetching data from NASA API.';
    //     return of(null);
    //   }),
    //   map((data: any) => {
    //     return {
    //       title: data.title,
    //       explanation: data.explanation,
    //       imageUrl: data.url
    //     };
    //   })
    // ).subscribe({
    //   next: (apodData: object) => this.astronomyPicture = apodData,
    //   error: (error) => this.errorMessage = 'Error processing data.'
    // });

    //
    // this.imagesVideosService.getResults('nebula').pipe(
    //   tap((data) => console.log(data)),
    //   catchError((error) => {
    //     console.log(error);
    //     return of(null);
    //   })
    // ).subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    // })

    // this.imagesVideosService.getResults2('apollo 11').pipe(
    //   tap((data) => console.log(data)),
    //   catchError((error) => {
    //     console.log(error);
    //     return of(null);
    //   })
    // ).subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    // })

    // const currentDate = new Date();
    // const endDate = currentDate.toISOString().split('T')[0];
    // currentDate.setDate(currentDate.getDate() - 6);
    // const startDate = currentDate.toISOString().split('T')[0];
    //
    // this.apodService.getAstronomyPicturesInRange(startDate, endDate).pipe(
    //   tap((data) => console.log('Raw Data:', data)),
    //   catchError((error) => {
    //     this.errorMessage = 'Error fetching data from NASA API.';
    //     return of([]);
    //   }),
    //   mergeMap((data: any[]) => data.reverse()),
    //   take(5),
    //   toArray(),
    //   map((data: any[]) => {
    //     return data.map(apodData => {
    //       return {
    //         title: apodData.title,
    //         explanation: apodData.explanation,
    //         imageUrl: apodData.url,
    //         date: apodData.date,
    //       };
    //     });
    //   })
    // ).subscribe({
    //   next: (apodData) => this.astronomyPictures = apodData,
    //   error: (error) => this.errorMessage = 'Error processing data.'
    // });
  }
}
