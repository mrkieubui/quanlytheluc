import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  data: any = [];
  unitId: string = "";
  nodes: any = [];

  constructor(private AppService: AppService) { }

  searchByName(items: any, searchText: string): Observable<any> {
    if (!items) {
      return this.data;
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter((it: { name: string; }) => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
  searchByNameAndUnit(items: any, searchText: string, unit: string): Observable<any> {
    if (!items) {
      return this.data;
    }
    if (!searchText && !unit) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter((it: { name: string; unit: string }) => {
      return it.name.toLocaleLowerCase().includes(searchText) && it.unit.includes(unit);
    });
  }
  searchByNameUnitAndRank(items: any, searchText: string, unit: string, rank: string): Observable<any> {
    if (!items) {
      return this.data;
    }
    if (!searchText && !unit && !rank) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter((it: { name: string; unit: string; rank: string }) => {
      return it.name.toLocaleLowerCase().includes(searchText) && it.unit.includes(unit) && it.rank.includes(rank);
    });
  }

  convertUnitNodes() {
    var data: any = this.AppService.getUnitNodes();
    var tempUser: any = localStorage.getItem('currentUser');
    var unitId: any = JSON.parse(tempUser).unitId;
    return this.searchTree(data[0], unitId);
  }

  searchTree(data: any, unitId: any) : any {
    if (data.id == unitId) {
      return data;
    } else if (data.children != null) {
      var i;
      var result = null;
      for (i = 0; result == null && i < data.children.length; i++) {
        result = this.searchTree(data.children[i], unitId);
      }
      return result;
    }
    return null;
  }
}
