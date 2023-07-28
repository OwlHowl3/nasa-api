import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaImageVideoLibraryService {
  private apiKey: string = environment.nasa_api_key;
  private apiUrl: string = `https://images-api.nasa.gov/search`;

  constructor(private http: HttpClient) { }

  getResults(search: string): Observable<any> {
    const url: string = `${this.apiUrl}?q=${search}`;
    return this.http.get(url).pipe(
      catchError((error) => {
        console.error('Error fetching results:', error);
        // Handle the error gracefully or return a default value
        return of(null);
      })
    );
  }
}
