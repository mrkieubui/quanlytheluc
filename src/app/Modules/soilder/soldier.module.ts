import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoldierRoutingModule } from './soldier-routing.module';
import { SoldierListComponent } from './soldier-list/soldier-list.component';
import { SoldierCreateComponent } from './soldier-create/soldier-create.component';
import { SoldierUpdateComponent } from './soldier-update/soldier-update.component';
import { FormsModule } from '@angular/forms';
import { SharesModule } from '../shares/shares.module';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';


@NgModule({
  declarations: [
    SoldierListComponent,
    SoldierCreateComponent,
    SoldierUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SoldierRoutingModule,
    SharesModule,
    NzTreeSelectModule
  ]
})
export class SoldierModule { }
