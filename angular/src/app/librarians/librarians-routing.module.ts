import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrarianControlPanelComponent } from './components/librarian-control-panel/librarian-control-panel.component';
import { LibrariandashboardComponent } from './components/librariandashboard/librariandashboard.component';
import { BookrequestComponent } from './components/bookrequest/bookrequest.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { StudentdeatilsComponent } from './components/studentdeatils/studentdeatils.component';

const routes: Routes = [
  {path:'',component:LibrarianControlPanelComponent,
children:[
  {path:'dashboard',component:LibrariandashboardComponent},
  {path:'bookreq',component:BookrequestComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'studentlist',component:StudentdeatilsComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrariansRoutingModule { }
