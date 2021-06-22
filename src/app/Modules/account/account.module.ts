import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './account-manager/account-list/account-list.component';
import { AccountCreateComponent } from './account-manager/account-create/account-create.component';
import { AccountUpdateComponent } from './account-manager/account-update/account-update.component';
import { AccountDetailsComponent } from './account-manager/account-details/account-details.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { SharesModule } from '../shares/shares.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AccountListComponent,
    AccountCreateComponent,
    AccountUpdateComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    NzTreeSelectModule,
    SharesModule,
    NgxPaginationModule
  ]
})
export class AccountModule { }
