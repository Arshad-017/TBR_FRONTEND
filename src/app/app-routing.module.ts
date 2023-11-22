import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { AddUpadateComponent } from './Component/add-upadate/add-upadate.component';
import { LoginGuardGuard } from './Guards/login-guard.guard';
import { SearchComponent } from './Component/AddUpdate/search/search.component';
import { ViewComponent } from './Component/AddUpdate/view/view.component';
import { AddComponent } from './Component/AddUpdate/add/add.component';
import { UpdateComponent } from './Component/AddUpdate/update/update.component';
import { SearchParentMatchesComponent } from './Component/AddUpdate/search-parent-matches/search-parent-matches.component';
import { SearchDetailsComponent } from './Component/AddUpdate/search-details/search-details.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { UpdateViewDetailsComponent } from './Component/AddUpdate/update-view-details/update-view-details.component';
import { UpdateParentMatchesComponent } from './Component/AddUpdate/update-parent-matches/update-parent-matches.component';
import { DeleteEmployeeComponent } from './Component/AddUpdate/delete-employee/delete-employee.component';
import { DeleteParentMatchesComponent } from './Component/AddUpdate/delete-parent-matches/delete-parent-matches.component';
import { DeleteViewDetailsComponent } from './Component/AddUpdate/delete-view-details/delete-view-details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TestheaderComponent } from './testheader/testheader.component';
import { ViewArchiveComponent } from './Component/AddUpdate/view-archive/view-archive.component';


const routes: Routes = [
  {path: 'test' , component : TestheaderComponent },
  {path: 'login' , component : LoginComponent },
  {path: 'home' , component : HomeComponent , canActivate:[LoginGuardGuard]},
  {path: 'signup' , component : SignUpComponent  },
  {path: 'page' , component : PaginationComponent  },
  {path: 'about' , component : AboutComponent , canActivate:[LoginGuardGuard] },
  {path: 'contact' , component : ContactComponent  , canActivate:[LoginGuardGuard]},
  {path : 'addUpadte' , component: AddUpadateComponent ,
  children: [
    { path: '', component: SearchComponent },
    { path: 'search', component: SearchComponent },
    { path: 'view', component:  ViewComponent}, 
    { path: 'archiveView', component:  ViewArchiveComponent},
    { path: 'add', component:  AddComponent},
    { path: 'update', component:  UpdateComponent},
    { path: 'searchParentMatches', component:  SearchParentMatchesComponent},
    { path: 'viewEmployeeDetails/:emp_id', component:  SearchDetailsComponent},
    { path: 'updateEmployeeDetails/:emp_id', component:  UpdateViewDetailsComponent},
    { path: 'deleteEmployeeDetails/:emp_id', component:  DeleteViewDetailsComponent},
    { path: 'deleteParentMatches', component:  DeleteParentMatchesComponent},
    { path: 'updateParentMatches', component:  UpdateParentMatchesComponent},
    { path: 'delete', component:  DeleteEmployeeComponent},
  ],
  canActivate:[LoginGuardGuard]},
  {path : '' , component : LoginComponent , pathMatch:'full'},
  {path : "**" , component :PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
