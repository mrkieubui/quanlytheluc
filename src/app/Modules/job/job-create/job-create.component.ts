import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/notifications.service';

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

  constructor(private AppService: AppService, private NotificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
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
