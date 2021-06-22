import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../Services/app.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/Services/notifications.service';

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
		this.AppService.getAllItems('participantGroups').subscribe(
			res => {
				this.participantGroups = res;
			}
		);
	}

	// Tạo mới đối tượng
	onCreatePaticipant(userForm: any) {
		if (userForm.value.name !== "" && userForm.value.slash !== "" && userForm.value.participantGroup !== "" && userForm.value.name.trim() !== "" && userForm.value.slash.trim() !== "" && userForm.value.participantGroup.trim() !== "") {
			this.AppService.createItem('participants', this.doituong).subscribe(() => {
				this.router.navigate(['/participant-manager']);
				this.NotificationsService.notiCreateSuccess();
			});
		}
	}
}
