import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus = true;

  constructor() { }

  ngOnInit(): void {
    this.logOut();
  }

  logOut(){
    this.loginStatus = false;

  }
}
