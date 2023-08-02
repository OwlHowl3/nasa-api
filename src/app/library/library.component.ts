import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter, forkJoin,
  groupBy,
  map, mergeMap,
  Observable, of, reduce,
  Subject,
  switchMap,
  tap,
  toArray
} from "rxjs";
import {FormControl} from "@angular/forms";
import {NasaImageVideoLibraryService} from "../services/nasa-image-video-library.service";
import * as moment from "moment";


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  searchTerm$: Subject<string | null> = new Subject<string | null>();
  searchResults$!: Observable<any[]>;
  search: FormControl<string | null> = new FormControl('');
  links: any;
  metadata: any;

  constructor(
    private libraryService: NasaImageVideoLibraryService
  ) { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe((value: string | null) => {
      this.searchTerm$.next(value);
    });

    this.searchResults$ = this.searchTerm$.pipe(
      map((query: string | null) => query ? query.trim() : ''),
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      tap((data) => console.log(data)),
      switchMap((query: string) => this.libraryService.getResults(query)),
      tap((data: any) => {
        this.links = data.collection.links;
        this.metadata = data.collection.metadata;
      }),
      mergeMap((data: any) => {
        if (data.collection.items.length === 0) {
          // If no results are returned, emit an empty array to reset the async pipe
          return of([]);
        }
        const mappedItems = data.collection.items.map((item: any) => {
          item.data[0].date_created = moment(item.data[0].date_created).format('DD/MM/YYYY');
          return this.libraryService.getLinksCollection(item.href).pipe(
            map((collection: any[]) => {
              return {
                ...item,
                collection: collection,
                previewImage: item.links?.filter((link: any) => link.rel === 'preview' && link.render === 'image')[0]?.href
              };
            })
          );
        });
        return forkJoin(mappedItems) as Observable<any>;
      })
    );
  }
}
