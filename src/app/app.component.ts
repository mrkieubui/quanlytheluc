import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginStatus = true;
  title = 'Quản lý thể lực';
  units: any = [];

  constructor(private AppService: AppService) {

  }

  ngOnInit(): void {
    this.AppService.getAllItems("units").subscribe(res => {
      this.AppService.convertUnitNodes(res);
    });
  }

  changeLoginStatus(_event: any) {
    // console.log("change login status: " );
  }
}
