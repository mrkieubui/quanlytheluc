import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NotificationsService } from 'src/app/notifications.service';

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

  onEditJob(editForm: any){
    if (editForm.value.name !== "" && editForm.value.name.trim() !== "" && editForm.value.slash !== "" && editForm.value.slash.trim() !== "") {
      this.AppService.updateItem('jobs', this.id, this.chucvu).subscribe((res) => {
        this.router.navigate(['/job-manager']);
        this.NotificationsService.notiUpdateSuccess();
      });
    }
  }

}
