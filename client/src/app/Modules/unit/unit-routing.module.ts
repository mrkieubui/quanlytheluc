import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Services/auth.guard';
import { UnitCreateComponent } from './unit-create/unit-create.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitManagerComponent } from './unit-manager/unit-manager.component';
import { UnitUpdateComponent } from './unit-update/unit-update.component';

const routes: Routes = [
  {
    path: 'unit-manager', component: UnitManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: UnitListComponent },
      { path: 'create', component: UnitCreateComponent },
      { path: 'update/:id', component: UnitUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitRoutingModule { }
