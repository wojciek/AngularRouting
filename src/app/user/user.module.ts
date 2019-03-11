import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [UserComponent, UserDataComponent, UserEditComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
