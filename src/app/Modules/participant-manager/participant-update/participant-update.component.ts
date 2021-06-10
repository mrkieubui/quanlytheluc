import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'src/app/notifications.service';

@Component({
  selector: 'app-participant-update',
  templateUrl: './participant-update.component.html',
  styleUrls: ['./participant-update.component.css']
})
export class ParticipantUpdateComponent implements OnInit {
  
  participantGroups: any = [];
  id: any = 0;
  participant: any = {};

  constructor(public AppService: AppService, public NotificationsService: NotificationsService, private router: Router, private route: ActivatedRoute,) { }

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
    });
  }
  // edit participant
  onEditPaticipant(userForm: any) {
    if (userForm.value.name !== "" && userForm.value.slash !== "" && userForm.value.participantGroup !== "") {
      this.AppService.updateItem('participants', this.id, this.participant).subscribe((res) => {
        this.router.navigate(['/participant-manager']);
        this.NotificationsService.notiUpdateSuccess();
      }
      );
    }
  }
}
