import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './listUsers/listusers.component';
import { UserComponent } from './User/user.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent,
    children: [
      { 
        path: '', 
        component: ListUsersComponent
       },
       
      ]
  },
  { path: 'user', 
    component: UserComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
