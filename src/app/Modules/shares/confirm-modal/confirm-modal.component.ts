import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() path: any;
  id: any;
  @Output() fetchData = new EventEmitter<string>();

  constructor(public AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
  }

  // delete item and reload page
  confirmDelete() {
    this.id = this.AppService.getStoredId();
    if (this.id == 1) {
      this.NotificationsService.notiError();
    } else {
      this.AppService.deleteItem(this.path, this.id).subscribe(() => {
        this.NotificationsService.notiDelete();
        this.fetchData.emit();
      });
    }
  }
}
