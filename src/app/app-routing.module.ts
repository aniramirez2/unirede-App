import { RouterModule, Routes } from '@angular/router';
import { AdminModule} from './Admin/admin.module'
import { NgModule } from '@angular/core';
const appRoutes: Routes = [
  { path: '', 
    //loadChildren: 'app/Admin/admin.module#AdminModule'
    loadChildren: () => AdminModule,
  }
];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
  })
  export class AppRoutingModule { }