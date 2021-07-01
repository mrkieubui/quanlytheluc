import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Services/auth.guard';
import { PlanCreateComponent } from './plan-create/plan-create.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanManagerComponent } from './plan-manager/plan-manager.component';
import { PlanUpdateComponent } from './plan-update/plan-update.component';

const routes: Routes = [
  {
    path: 'plan-manager', component: PlanManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PlanListComponent },
      { path: 'create', component: PlanCreateComponent },
      { path: 'update/:id', component: PlanUpdateComponent },
      { path: 'details/:id', component: PlanDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
