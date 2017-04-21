import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Import our Routes file
import { myRoutes } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentComponent } from './student.component';

import { RouterModule, Routes } from "@angular/router";

import { DbService } from './db.service';
import { StudentDetailComponent } from './home/student-detail/student-detail.component';
import { MyCanActivateComponent } from './mycanactivate.component';
import { ErrorComponent } from './error.component';


// const MY_ROUTES: Routes = [
//      { path: '', component: HomeComponent },
//      { path: 'students', component: StudentComponent },
//      { path: 'students/profile/:id', component: StudentDetailComponent, canActivate:[MycanactivateComponent] },
//      { path: '**', redirectTo: '/' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    StudentDetailComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes // add it to imports
  ],
  providers: [DbService, MyCanActivateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

