import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaApodService {
  private apiKey: string = environment.nasa_api_key;
  private apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getAstronomyPictureOfTheDay(): Observable<any> {
    const url: string = `${this.apiUrl}`;
    return this.http.get(url);
  }

  getAstronomyPicturesInRange(startDate: string, endDate: string): Observable<any[]> {
    const url = `${this.apiUrl}&start_date=${startDate}&end_date=${endDate}`;
    return this.http.get<any[]>(url);
  }
}
