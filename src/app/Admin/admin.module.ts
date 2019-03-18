import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AdminComponent } from './admin.component';
import { ListUsersComponent } from './listUsers/listusers.component';
import { UserComponent } from './User/user.component';
import { AdminRoutingModule } from './admin-routing.module'
@NgModule({
  declarations: [
    AdminComponent,
    ListUsersComponent,
    UserComponent
  ],
  imports: [
    NgbModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
