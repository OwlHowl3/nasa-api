import { Component, OnInit } from '@angular/core';
import {EarthService} from '../services/earth.service';
import * as moment from 'moment';
import {Category} from '../shared/models/category';
import {map, pluck} from 'rxjs';
import { Source } from '../shared/models/source';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {
  categories: Category[] = [];
  sources: Source[] = [];

  constructor(
    private earthService: EarthService
  ) { }

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

}
