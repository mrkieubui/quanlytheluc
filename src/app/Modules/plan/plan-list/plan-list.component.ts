import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  originPlans: any = [];
  plans: any = [];
  id: number = 0;
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  unitId: any = "1";
  // Pagination default value
  currentPage: number = 1;
  itemsPerPage: number = 12;
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

  getData() {
    this.AppService.getAllItems('plans').subscribe(res => {
      this.plans = this.originPlans = res;
    });
  }

  fetchData() {
    this.getData();
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
      this.plans = this.FilterService.searchByNameAndUnit(this.originPlans, searchText, this.unit);
    });
  }
  // clear search
  clearSearch() {
    this.searchText = "";
    this.unitId = "1";
    this.plans = this.originPlans;
  }
}
