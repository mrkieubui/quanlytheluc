import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() changeLoginStatus = new EventEmitter<boolean>();
  loginStatus : boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.loginStatus = true;
    // console.log(this.loginStatus)
    this.changeLoginStatus.emit(this.loginStatus);
    this.router.navigate(['app-dashboard']);
  }
}
