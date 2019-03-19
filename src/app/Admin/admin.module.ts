import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AdminComponent } from './admin.component';
import { ListUsersComponent } from './listUsers/listusers.component';
import { UserComponent } from './User/user.component';
import { AdminRoutingModule } from './admin-routing.module'
import {NavBarComponent } from '../Common/NavBar/nav-bar.component'
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AdminComponent,
    ListUsersComponent,
    UserComponent,
    NavBarComponent
  ],
  imports: [
    NgbModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
