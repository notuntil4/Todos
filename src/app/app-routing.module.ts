import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
    {path:'firstpage', component:FirstComponent, canActivate:[AuthGuard]},
    {path:'secondpage', component:SecondComponent},
    {path:'thirdpage', component:ThirdComponent},
    {path:'todolist', component:TodolistComponent},
    {path: 'addtodo', component:AddtodoComponent},
    {path: 'login', component:LoginComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
