import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../Services/app.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {

  chucvu: any = {
    name: "",
    slash: "",
    order: "" 
  };
	userRole: any;

  constructor(private AppService: AppService, private NotificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
    var tempUser: any = localStorage.getItem('currentUser');
		this.userRole = JSON.parse(tempUser).role;
  }

  // Tao moi chuc vu
	onCreateJob(userForm: any) {
		if (userForm.value.name !== "" && userForm.value.slash !== "") {
			this.AppService.createItem('jobs', this.chucvu).subscribe(() => {
				this.router.navigate(['/job-manager']);
				this.NotificationsService.notiCreateSuccess();
			});
		}
	}
}
