import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/notifications.service';

@Component({
  selector: 'app-participant-create',
  templateUrl: './participant-create.component.html',
  styleUrls: ['./participant-create.component.css']
})
export class ParticipantCreateComponent implements OnInit {

  doituong: any = {
    name: "",
    slash: "",
    participantGroup: ""
  };
  participantGroups: any = [];

  constructor(public AppService: AppService, public NotificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
    // gap van de khi reload page, chua load kip nhom doi tuong ???
    this.AppService.getAllItems('participantGroups').subscribe(
      res => {
        this.participantGroups = res;
      }
    );
  }
  
  // Tạo mới đối tượng
  onCreatePaticipant(userForm: any) {
    if (userForm.value.name !== "" && userForm.value.slash !== "" && userForm.value.participantGroup !== "") {
      this.AppService.createItem('participants', this.doituong).subscribe(() => {
        this.router.navigate(['/participant-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }
}
