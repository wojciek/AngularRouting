import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDataComponent } from './user-data/user-data.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user.component';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ],
  declarations: [
    UserDataComponent,
    UserEditComponent,
    UserComponent]
})
export class UserModule { }
