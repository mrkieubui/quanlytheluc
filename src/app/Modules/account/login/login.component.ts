import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() changeLoginStatus = new EventEmitter<boolean>();
  username: string = "";
  password: string = "";
  userError: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private AuthenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.router.navigate(['dashboard']);
    }
    ;
  }

  onLogin(loginForm: any) {
    // if (loginForm.value.username == 'admin' && loginForm.value.password == '123456') {
    this.AuthenticationService.login(loginForm.value.username, loginForm.value.password)
    // } else {
    // this.userError = true;
    // }
  }
}
