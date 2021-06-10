import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit {

  baseURL: string = "http://localhost:3000/";

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
  public deleteItem(path: string, id: number): Observable<any> {
    return this.http.delete(this.baseURL + path + '/' + id);
  }
}
