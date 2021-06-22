import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/Services/app.service';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: any = [];
  originDocuments: any = [];
  id: number = 0;
  unitId: any = "1";
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  // Pagination default value
  currentPage: number = 1;
  itemsPerPage: number = 10;
  // search text
  searchText: string = "";
  unit: string = "";

  constructor(private AppService: AppService, private FilterService: FilterService) { }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 500);
  }

  fetchData() {
    this.getData();
  }

  getData() {
    this.AppService.getAllItems("documents").subscribe(res => {
      this.originDocuments = this.documents = res;
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

  // search by name and unit
  fullSearchFunction(searchText: any, unitId: any) {
    this.AppService.getItem('units', unitId).subscribe(res => {
      this.unit = res.slash;
      this.documents = this.FilterService.searchByNameAndUnit(this.originDocuments, searchText, this.unit);
    });
  }
  // clear search
  clearSearch() {
    this.searchText = "";
    this.unitId = "1";
    this.documents = this.originDocuments;
  }

}
