import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import * as moment from 'moment';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  range: UntypedFormGroup = new UntypedFormGroup({
    start: new UntypedFormControl(moment()),
    end: new UntypedFormControl(moment()),
  });

  constructor() { }

  ngOnInit(): void {
    console.log(moment());
  }
}
