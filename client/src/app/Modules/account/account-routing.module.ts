import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Services/auth.guard';
import { AccountCreateComponent } from './account-manager/account-create/account-create.component';
import { AccountDetailsComponent } from './account-manager/account-details/account-details.component';
import { AccountListComponent } from './account-manager/account-list/account-list.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { AccountUpdateComponent } from './account-manager/account-update/account-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'account-manager', component: AccountManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AccountListComponent },
      { path: 'create', component: AccountCreateComponent },
      { path: 'update/:id', component: AccountUpdateComponent },
      { path: 'details/:id', component: AccountDetailsComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
