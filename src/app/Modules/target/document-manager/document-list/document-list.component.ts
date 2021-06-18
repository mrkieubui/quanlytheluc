import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: any;
  id: number = 0;
  unit: any = "";
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  defaultUnit: any = "1";

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
    this.nodes = this.AppService.getUnitNodes();
  }

  fetchData() {
    this.getData();
  }

  getData() {
    this.AppService.getAllItems("documents").subscribe(res => {
      this.documents = res;
    })
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

  // get unit by id
  getUnitById(id: any) {
    this.AppService.getItem("units", id).subscribe(res => {
      this.unit = res.title;
      // console.log(this.unit);
      return this.unit;
    })
  }

}
