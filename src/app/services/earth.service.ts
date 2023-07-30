import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EarthService {
  apiKey: string = environment.nasa_api_key;
  private apiUrl: string = `https://api.nasa.gov/planetary/earth/imagery?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getEarthData(lat: number, long: number, date: string, dim: number): Observable<any> {
    console.log(lat);
    console.log(long);
    console.log(date);
    console.log(dim);
    const url: string = this.apiUrl;
    const options: {params: HttpParams} = {
      params: new HttpParams().set('lat', lat)
        .set('long', long)
        .set('dim', dim)
    }

    return this.http.get(url, options);
  }
}
