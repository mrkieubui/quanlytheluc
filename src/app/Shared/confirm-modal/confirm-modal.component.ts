import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationsService } from 'src/app/notifications.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() path = "";
  @Input() id = 0;
  @Output() fetchData = new EventEmitter<string>();
  constructor(public AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
  }

  // delete item and reload page
  confirmDelete(path: string, id: number) {
    this.AppService.deleteItem(path, id).subscribe(() => {
      this.NotificationsService.notiDelete();
      this.fetchData.emit();
    });
    

  }

}
