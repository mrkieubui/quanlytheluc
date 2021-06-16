import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UnitRoutingModule } from './unit-routing.module';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitCreateComponent } from './unit-create/unit-create.component';
import { UnitUpdateComponent } from './unit-update/unit-update.component';
import { UnitTreeCardComponent } from './unit-tree-card/unit-tree-card.component';
import { FormsModule } from '@angular/forms';
import { SharesModule } from '../shares/shares.module';

@NgModule({
  declarations: [
    UnitListComponent,
    UnitCreateComponent,
    UnitUpdateComponent,
    UnitTreeCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UnitRoutingModule,
    SharesModule,
    NzTreeSelectModule,
    BrowserAnimationsModule
  ],
  exports: [
    UnitTreeCardComponent
  ]

})
export class UnitModule { }
