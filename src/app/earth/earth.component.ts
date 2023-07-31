import { Component, OnInit } from '@angular/core';
import {EarthService} from '../services/earth.service';
import * as moment from 'moment';
import {Category} from '../shared/models/category';
import {map, pluck} from 'rxjs';
import { Source } from '../shared/models/source';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {
  categories: Category[] = [];
  sources: Source[] = [];
  eventsFiltersForm!: FormGroup;

  constructor(
    private earthService: EarthService,
    private formBuilder: FormBuilder
  ) {
    this.eventsFiltersForm = this.formBuilder.group({
      category: [''],
      source: [''],
      status: [''],
      limit: [''],
      range: this.formBuilder.group({
        min: [''],
        max: ['']
      }),
      coordinates: this.formBuilder.group({
        minLat: [''],
        maxLat: [''],
        minLong: [''],
        maxLong: [''],
      })
    });
  }

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchSources();
  }

  fetchCategories() {
    this.earthService.fetchCategories().pipe(
      map((data: any) => data.categories.map((categoryData: any): Category => ({
        id: categoryData.id,
        title: categoryData.title,
      }))),
    ).subscribe((data: Category[]) => {
      this.categories = data;
      console.log(this.categories);
    })
  }

  fetchSources() {
    this.earthService.fetchSources().pipe(
      map((data: any) => data.sources.map((sourceData: any): Source => ({
        id: sourceData.id,
        title: sourceData.title,
      }))),
    ).subscribe((data: Source[]) => {
      this.sources = data;
      console.log(this.sources);
    })
  }

  getEvents() {

  }

}
