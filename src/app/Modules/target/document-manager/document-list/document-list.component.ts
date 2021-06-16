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
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];
  unit: any = "1";
  units: any = [];

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
    this.AppService.getAllItems('units').subscribe(
      res => {
        this.units = res;
        this.nodes = arrayToTree(res, { customID: "id", parentProperty: "parentId", childrenProperty: "children" });
      }
    );
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

}
