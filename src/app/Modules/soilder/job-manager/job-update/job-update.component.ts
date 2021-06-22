import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit {

  id: any = 0;
  chucvu: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id to edit
    this.id = this.route.snapshot.paramMap.get('id');

    // get one participant by id
    this.AppService.getItem('jobs', this.id).subscribe((res) => {
      this.chucvu = res;
    });
  }

  onEditJob(jobEditForm: any){
    if (jobEditForm.value.name !== "" && jobEditForm.value.name.trim() !== "" && jobEditForm.value.slash !== "" && jobEditForm.value.slash.trim() !== "") {
      this.AppService.updateItem('jobs', this.id, this.chucvu).subscribe((res) => {
        this.router.navigate(['/job-manager']);
        this.NotificationsService.notiUpdateSuccess();
      });
    }
  }

}
