import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./error.component";

import { HomeComponent } from "./home.component";
import { StudentComponent } from "./student.component";
import { StudentDetailComponent } from './student-detail/student-detail.component';

import { MycanActivateComponent } from './mycanactivate.component';

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'students', component: StudentComponent },
     { path: 'error', component: ErrorComponent },
     { path: 'students/profile/:id', component: StudentDetailComponent, canActivate:[MycanActivateComponent] },
     { path: 'students/profile',redirectTo: '/error'},
     { path: '**', redirectTo: 'error' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);