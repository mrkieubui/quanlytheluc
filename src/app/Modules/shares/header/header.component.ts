import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any = {};

  constructor(private AppService: AppService, private route: ActivatedRoute, private AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
    setTimeout(() => {
      var temp: any = localStorage.getItem('currentUser');
      this.user = JSON.parse(temp);
    }, 500);
  }

  logOut() {
    this.AuthenticationService.logout();
  }
}
