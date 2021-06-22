import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-measure-unit-list',
  templateUrl: './measure-unit-list.component.html',
  styleUrls: ['./measure-unit-list.component.css']
})
export class MeasureUnitListComponent implements OnInit {

  measureUnits: any = [];
  id: number = 0;
  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  fetchData() {
    this.getData();
  }

  getData() {
    this.AppService.getAllItems("measureUnits").subscribe(res => {
      this.measureUnits = res;
    })
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

}
