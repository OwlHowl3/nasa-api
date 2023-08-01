import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaImageVideoLibraryService {
  private apiKey: string = environment.nasa_api_key;
  private apiUrl: string = `https://images-api.nasa.gov/search`;

  constructor(private http: HttpClient) { }

  getResults(search: string, page: number | null = null): Observable<any> {
    const url: string = this.apiUrl;
    let params: HttpParams = new HttpParams().set('q', search);
    if (page) {
      params = params.append('page', page);
    }

    const options: { params: HttpParams } = {
      params: params
    };

    return this.http.get(url, options).pipe(
      catchError((error) => {
        console.error('Error fetching results:', error);
        return of(null);
      })
    );
  }

  getLinksCollection(url: string): Observable<any>{
    return this.http.get(url);
  }
}
