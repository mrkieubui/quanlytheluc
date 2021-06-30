import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  results: any = [];
  originResults: any = [];
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  unitId: any = "1";
  id: any;
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
    this.AppService.getAllItems("results").subscribe(res => {
      this.results = this.originResults = res;
    });
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

  // search by name and unit
  fullSearchFunction(searchText: any, unitId: any) {
    this.AppService.getItem('units', unitId).subscribe(res => {
      this.unit = res.slash;
      this.results = this.FilterService.searchByNameAndUnit(this.originResults, searchText, this.unit);
    });
  }

  // clear search
  clearSearch() {
    this.searchText = "";
    this.unitId = "1";
    this.results = this.originResults;
  }
}
