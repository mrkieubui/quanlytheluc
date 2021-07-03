import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-unit-tree-card',
  templateUrl: './unit-tree-card.component.html',
  styleUrls: ['./unit-tree-card.component.css']
})
export class UnitTreeCardComponent implements OnInit {

  @Input() child: any;
  @Input() userRole: any;
  @Output() passDeleteIdToParent = new EventEmitter<number>();

  id: any;
  collapseId: any;
  collapseStatus: boolean = false;

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
  }

  getDeleteId(id: any) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

  changeCollapse(child: any) {
    this.collapseId = child._id;
    if (child.children && child.children.length > 0) {
      this.collapseStatus = !this.collapseStatus;
    }
  }
}
