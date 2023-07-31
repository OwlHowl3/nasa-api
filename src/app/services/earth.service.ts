import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Category} from "../shared/models/category";

@Injectable({
  providedIn: 'root'
})
export class EarthService {
  private apiUrl: string = `https://eonet.gsfc.nasa.gov/api/v3`;

  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<any> {
    const url: string = `${this.apiUrl}/categories`;
    return this.http.get<any>(url);
  }

  fetchSources(): Observable<any> {
    const url: string = `${this.apiUrl}/sources`;
    return this.http.get<any>(url);
  }
}
