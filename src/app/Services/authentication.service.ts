import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/Services/app.service';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseURL: string = "http://localhost:3000/";
  isLoggedIn: boolean = false;
  userLogin: any = {}

  constructor(private http: HttpClient, private AppService: AppService, private router: Router) { }

  login(username: string, password: string) {
    // console.log(username + " - " + password)
    this.AppService.getAllItems('accounts').subscribe(res => {
      res.forEach((user: { username: string; password: string; }) => {
        if (user.username == username && user.password == password) {
          this.isLoggedIn = true;
          this.userLogin = user;
        }
      });
    })
    if (this.isLoggedIn) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(this.userLogin));
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      this.router.navigate(['dashboard']);
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    this.router.navigate(['login']);
  }
}
