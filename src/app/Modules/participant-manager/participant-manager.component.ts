import { Component, OnInit} from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-participant-manager',
  templateUrl: './participant-manager.component.html',
  styleUrls: ['./participant-manager.component.css']
})

export class ParticipantManagerComponent implements OnInit {

  public participants: any = [];
  public participantGroups: any = [];

  public participantGroup1: any = [];
  public participantGroup2: any = [];
  public participantGroup3: any = [];

  public group1Length: any = 0;
  public group2Length: any = 0;
  public group3Length: any = 0;

  id: number = 0;
  constructor(public AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  fetchData() {
    this.getData();
  }
  getData() {
    this.AppService.getAllItems('participants').subscribe(
      res => {
        this.participants = res;
        // console.log(this.participants)
        this.participantGroup1 = this.participants.filter((p: { participantGroup: string; }) => p.participantGroup === "1");
        this.participantGroup2 = this.participants.filter((p: { participantGroup: string; }) => p.participantGroup === "2");
        this.participantGroup3 = this.participants.filter((p: { participantGroup: string; }) => p.participantGroup === "3");
        this.group1Length = this.participantGroup1.length;
        this.group2Length = this.participantGroup2.length;
        this.group3Length = this.participantGroup3.length;
      }
    );
    this.AppService.getAllItems('participantGroups').subscribe(
      res => {
        this.participantGroups = res;
      }
    );
  };
  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
  }

}