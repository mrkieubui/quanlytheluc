import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldierCreateComponent } from './soldier-create/soldier-create.component';
import { SoldierListComponent } from './soldier-list/soldier-list.component';
import { SoldierManagerComponent } from './soldier-manager/soldier-manager.component';
import { SoldierUpdateComponent } from './soldier-update/soldier-update.component';

const routes: Routes = [
  {
    path: 'soldier-manager', component: SoldierManagerComponent,
    children: [
      { path: '', component: SoldierListComponent },
      { path: 'create', component: SoldierCreateComponent },
      { path: 'update/:id', component: SoldierUpdateComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoldierRoutingModule { }
