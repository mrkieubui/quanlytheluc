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
    console.log("sotre id: " + this.idStored)
  }

  public getStoredId(): Observable<any> {
    console.log("get sotred id: " + this.idStored)
    return this.idStored;
  }
}
