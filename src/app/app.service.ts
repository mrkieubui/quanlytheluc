import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as arrayToTree from 'array-to-tree';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit {

  baseURL: string = "http://localhost:3000/";
  idStored: any;
  unitIdStored: any;
  unitStored: any = "BCTT";
  unitNodes: any = [];
  soldiers: any = [];
  participants: any = [];
  ranks: any = [];
  jobs: any = [];
  genders: any = [];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  // get all item dung chung cho cac module
  public getAllItems(path: string): Observable<any> {
    return this.http.get(this.baseURL + path);
  }
  // get 1 item dung chung cho cac module
  public getItem(path: string, id: any): Observable<any> {
    return this.http.get(this.baseURL + path + '/' + id);
  }
  // Tao moi 1 item dung chung cho cac module
  public createItem(path: string, doituong: any): Observable<any> {
    return this.http.post(this.baseURL + path, doituong);
  }
  // Cap nhat 1 item dung chung cho cac module
  public updateItem(path: string, id: any, body: any): Observable<any> {
    return this.http.put(this.baseURL + path + '/' + id, body);
  }
  // Xoa 1 item dung chung cho cac module
  public deleteItem(path: string, id: any): Observable<any> {
    return this.http.delete(this.baseURL + path + '/' + id);
  }

  // store parent id
  public storeId(id: any) {
    this.idStored = id;
    // console.log("sotre id: " + this.idStored)
  }
  public getStoredId(): Observable<any> {
    // console.log("get sotred id: " + this.idStored)
    return this.idStored;
  }

  // store unitid
  public storeUnitId(id: any) {
    this.unitIdStored = id;
    // console.log("sotre unit id: " + this.unitIdStored)

    // Convert unit to 3 slash format 
    this.getItem("units", id).subscribe(res => {
      this.unitStored = res.slash;
      if (res.parentId && res.parentId !== "0") {
        this.getItem("units", res.parentId).subscribe(res => {
          this.unitStored += "-" + res.slash;
          if (res.parentId && res.parentId !== "0") {
            this.getItem("units", res.parentId).subscribe(res => {
              this.unitStored += "-" + res.slash;
            })
          }
        })
      }
    })
  }
  public getStoredUnit(): Observable<any> {
    // console.log("get sotred unit: " + this.unitStored)
    return this.unitStored;
  }

  // convert to nodes select tree
  public convertUnitNodes(units: any) {
    this.unitNodes = arrayToTree(units, { customID: "id", parentProperty: "parentId", childrenProperty: "children" });
  }

  // get unit nodes
  public getUnitNodes(): Observable<any> {
    return this.unitNodes;
  }

  // store soldiers
  public storeSoldiers(data: any) {
    this.soldiers = data;
  }
  // get soldiers
  public getSoldiers(): Observable<any> {
    return this.soldiers;
  }

  // store soldiers
  public storeDataByModule(data: any, module: string) {
    if (module == 'soldiers') {
      this.soldiers = data;
    } else if (module == 'participants') {
      this.participants = data;
    } else if (module == 'ranks') {
      this.ranks = data;
    } else if (module == 'jobs') {
      this.jobs = data;
    } else if (module == 'genders') {
      this.genders = data;
    }
  }
  // get soldiers
  public getDataByModule(module: string) {
    if (module == 'soldiers') {
      return this.soldiers;
    } else if (module == 'participants') {
      return this.participants;
    } else if (module == 'ranks') {
      return this.ranks;
    } else if (module == 'jobs') {
      return this.jobs;
    } else if (module == 'genders') {
      return this.genders;
    }
  }

}
