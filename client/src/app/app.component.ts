import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from './Services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginStatus: boolean = false;
  title = 'Quản lý thể lực';
  units: any = [];

  constructor(private AppService: AppService, private router: Router) {
  }

  ngOnInit(): void {

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // if (event.url === '/login') {
        //   this.loginStatus = false;
        // } 
        if (localStorage.getItem('isLoggedIn') == 'true') {
          this.loginStatus = true;
        } else {
          this.loginStatus = false;
        }
      }
    });

    this.AppService.getAllItems("units").subscribe(res => {
      this.AppService.convertUnitNodes(res);
    });
    this.AppService.getAllItems('ranks').subscribe(res => {
      this.AppService.storeDataByModule(res, 'ranks');
    });
    this.AppService.getAllItems('participants').subscribe(res => {
      this.AppService.storeDataByModule(res, 'participants');
    });
    this.AppService.getAllItems('jobs').subscribe(res => {
      this.AppService.storeDataByModule(res, 'jobs');
    });
    this.AppService.getAllItems('genders').subscribe(res => {
      this.AppService.storeDataByModule(res, 'genders');
    });
    this.AppService.getAllItems('roles').subscribe(res => {
      this.AppService.storeDataByModule(res, 'roles');
    });
  }

}
