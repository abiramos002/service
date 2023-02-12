import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Sidebarcomponent } from './sidebar/sidebar.component';
import { Logincomponent } from './loginform/login.component';
import { HighlightDirective } from './shared/highlight.directive';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentNamePipe } from './shared/custom-pipe.pipe';
import { AddStudentComponent } from './add-student/add-student.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Sidebarcomponent,
    Logincomponent,
    HighlightDirective,
    ProfileComponent,
    DepartmentNamePipe,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
