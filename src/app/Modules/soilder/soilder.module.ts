import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoilderRoutingModule } from './soilder-routing.module';
import { SoilderListComponent } from './soilder-list/soilder-list.component';
import { SoilderCreateComponent } from './soilder-create/soilder-create.component';
import { SoilderUpdateComponent } from './soilder-update/soilder-update.component';
import { FormsModule } from '@angular/forms';
import { SharesModule } from '../shares/shares.module';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';


@NgModule({
  declarations: [
    SoilderListComponent,
    SoilderCreateComponent,
    SoilderUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SoilderRoutingModule,
    SharesModule,
    NzTreeSelectModule
  ]
})
export class SoilderModule { }
