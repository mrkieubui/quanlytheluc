import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  data: any = [];
  constructor() { }

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
}
