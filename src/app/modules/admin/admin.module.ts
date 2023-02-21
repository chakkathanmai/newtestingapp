import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsComponent } from './bills/bills.component';
import { MaterialModule } from '../material/material.module'
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component'
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserModule } from '../user/user.module'


@NgModule({
  declarations: [
    BillsComponent,
    UsersComponent,
    UserDetailsComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    UserModule,
    RouterModule
  ]
})
export class AdminModule {

}
