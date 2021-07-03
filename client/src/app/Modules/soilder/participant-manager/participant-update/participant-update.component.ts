import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-participant-update',
  templateUrl: './participant-update.component.html',
  styleUrls: ['./participant-update.component.css']
})
export class ParticipantUpdateComponent implements OnInit {

  participantGroups: any = [];
  id: any = 0;
  participant: any = {};
  userRole: any;

  constructor(public AppService: AppService, public NotificationsService: NotificationsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get list participant group
    this.AppService.getAllItems('participantGroups').subscribe(
      res => {
        this.participantGroups = res;
      }
    );

    // get participant id to edit
    this.id = this.route.snapshot.paramMap.get('id');

    // get one participant by id
    this.AppService.getItem('participants', this.id).subscribe((res) => {
      this.participant = res;
      console.log( this.participant)
    });
    var tempUser: any = localStorage.getItem('currentUser');
		this.userRole = JSON.parse(tempUser).role;
  }
  // edit participant
  onEditPaticipant(userForm: any) {
    if (userForm.value.name !== "" && userForm.value.slash !== "" && userForm.value.participantGroup !== "" && userForm.value.name.trim() !== "" && userForm.value.slash.trim() !== "" && userForm.value.participantGroup.trim() !== "") {
      this.AppService.updateItem('participants', this.id, this.participant).subscribe((res) => {
        this.router.navigate(['/participant-manager']);
        this.NotificationsService.notiUpdateSuccess();
      });
    }
  }
}
