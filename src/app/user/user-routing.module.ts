import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDataComponent } from './user-data/user-data.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: '',
    component: UserComponent,
    children: [
            {
              path: 'data',
              component: UserDataComponent,
            },
            {
              path: 'edit',
              component: UserEditComponent,
            }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
