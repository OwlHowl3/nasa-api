import { Component, OnInit } from '@angular/core';
import {EarthService} from "../services/earth.service";
import * as moment from "moment";

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {

  constructor(
    private earthService: EarthService
  ) { }

  ngOnInit(): void {
    this.earthService.getEarthData(
      40.69, -74.14, moment().format('YYYY-MM-DD'), 0.025
    ).subscribe((data) => {
      console.log(data);
    });
  }

}
