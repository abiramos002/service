import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Logincomponent } from './loginform/login.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
