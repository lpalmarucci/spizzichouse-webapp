import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './app/modules/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        component: AuthenticationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
