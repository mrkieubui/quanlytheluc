import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultCreateComponent } from './result-create/result-create.component';
import { ResultUpdateComponent } from './result-update/result-update.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { ResultListComponent } from './result-list/result-list.component';
import { FormsModule } from '@angular/forms';
import { SharesModule } from '../shares/shares.module';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ResultCreateComponent,
    ResultUpdateComponent,
    ResultDetailsComponent,
    ResultListComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    FormsModule,
    SharesModule,
    NzTreeSelectModule,
    NgxPaginationModule
  ]
})
export class ResultModule { }
