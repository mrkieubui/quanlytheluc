import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  id: any;
  account: any = {};
  userRole: any;

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one soldier
    this.AppService.getItem('accounts', this.id).subscribe((res) => {
      this.account = res;
    });
    // get user role
    var tempUser: any = localStorage.getItem('currentUser');
    this.userRole = JSON.parse(tempUser).role;
  }

}
