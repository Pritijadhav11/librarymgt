import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SigninComponent } from './shared/components/signin/signin.component';


const routes: Routes = [
  {path:"",redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},

    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'signin', component:SigninComponent},



  
  
{path:'student',

loadChildren:()=> import('./students/students.module').then(mod=>mod.StudentsModule)
},
{path:'librarian',

loadChildren:()=> import('./librarians/librarians.module').then(mod=>mod.LibrariansModule)
},
{
  path:'**', component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
