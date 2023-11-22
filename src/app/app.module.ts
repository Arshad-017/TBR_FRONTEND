import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './Component/base/base.component';

import { LoginComponent } from './Component/login/login.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { HomeComponent } from './Component/home/home.component';
import { AddUpadateComponent } from './Component/add-upadate/add-upadate.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CarouselComponent } from './Component/carousel/carousel.component';
import { AddUpdateMenuTabComponent } from './Component/add-update-menu-tab/add-update-menu-tab.component';
import { SearchComponent } from './Component/AddUpdate/search/search.component';
import { AddComponent } from './Component/AddUpdate/add/add.component';
import { UpdateComponent } from './Component/AddUpdate/update/update.component';
import { ViewComponent } from './Component/AddUpdate/view/view.component';
import { PaginationLoadDataPipe } from './Pipe/pagination-load-data.pipe';
import { SearchParentMatchesComponent } from './Component/AddUpdate/search-parent-matches/search-parent-matches.component';
import { SearchDetailsComponent } from './Component/AddUpdate/search-details/search-details.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutComponent } from './Component/about/about.component';
import { UpdateViewDetailsComponent } from './Component/AddUpdate/update-view-details/update-view-details.component';
import { UpdateParentMatchesComponent } from './Component/AddUpdate/update-parent-matches/update-parent-matches.component';
import { DeleteEmployeeComponent } from './Component/AddUpdate/delete-employee/delete-employee.component';
import { DeleteParentMatchesComponent } from './Component/AddUpdate/delete-parent-matches/delete-parent-matches.component';
import { DeleteViewDetailsComponent } from './Component/AddUpdate/delete-view-details/delete-view-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './pagination/pagination.component';
import { TestheaderComponent } from './testheader/testheader.component';
import { ViewArchiveComponent } from './Component/AddUpdate/view-archive/view-archive.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AddUpadateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AddUpdateMenuTabComponent,
    SearchComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    PaginationLoadDataPipe,
    SearchParentMatchesComponent,
    SearchDetailsComponent,
    ContactComponent,
    AboutComponent,
    UpdateViewDetailsComponent,
    UpdateParentMatchesComponent,
    DeleteEmployeeComponent,
    DeleteParentMatchesComponent,
    DeleteViewDetailsComponent,
    PaginationComponent,
    TestheaderComponent,
    ViewArchiveComponent,
   
   
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
