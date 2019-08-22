import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { BooksComponent } from './components/books/books.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
 {path:'',component:ControlPanelComponent,
children:[
  {path:'dashboard',component:StudentDashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'books',component:BooksComponent},
  {path:'mybooks',component:MyBooksComponent},
  {path:'register',component:RegistrationComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
