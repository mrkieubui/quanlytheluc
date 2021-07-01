import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Services/auth.guard';
import { ResultCreateComponent } from './result-create/result-create.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { ResultInfoComponent } from './result-info/result-info.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultManagerComponent } from './result-manager/result-manager.component';
import { ResultUpdateComponent } from './result-update/result-update.component';

const routes: Routes = [
  {
    path: 'result-manager', component: ResultManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ResultListComponent },
      { path: 'create', component: ResultCreateComponent },
      { path: 'update/:id', component: ResultUpdateComponent },
      { path: 'details/:id', component: ResultDetailsComponent },
      { path: 'info/:id', component: ResultInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
