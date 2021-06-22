import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

import { TargetRoutingModule } from './target-routing.module';
import { DocumentListComponent } from './document-manager/document-list/document-list.component';
import { DocumentCreateComponent } from './document-manager/document-create/document-create.component';
import { DocumentUpdateComponent } from './document-manager/document-update/document-update.component';
import { MeasureUnitListComponent } from './measure-unit-manager/measure-unit-list/measure-unit-list.component';
import { MeasureUnitUpdateComponent } from './measure-unit-manager/measure-unit-update/measure-unit-update.component';
import { MeasureUnitCreateComponent } from './measure-unit-manager/measure-unit-create/measure-unit-create.component';
import { FormsModule } from '@angular/forms';
import { SharesModule } from '../shares/shares.module';
import { DocumentDetailsComponent } from './document-manager/document-details/document-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DocumentListComponent,
    DocumentCreateComponent,
    DocumentUpdateComponent,
    DocumentDetailsComponent,
    MeasureUnitListComponent,
    MeasureUnitCreateComponent,
    MeasureUnitUpdateComponent,
  ],
  imports: [
    CommonModule,
    TargetRoutingModule,
    FormsModule,
    SharesModule,
    NzTreeSelectModule,
    NgxPaginationModule
  ]
})
export class TargetModule { }
