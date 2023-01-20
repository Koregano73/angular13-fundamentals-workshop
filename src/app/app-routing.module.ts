import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**', redirectTo: '/home' }
];
/**
 * example of built out routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'examples',
    component: ExampleComponent,
    // this is how you would initialize child routes in a route
    children: [
      {
        path:'child',
        component: AdminComponent,
        children: [
          {path: 'payroll', component: AdminPayrollCOmponent }
          {path: 'vacation', component: AdminVacationComponent }
        ],
      },
      { path: 'params', component: RouterParamsComponent },
      // this is how you would initialize parameterized routes
      { path: 'params/:id', component: RouterParamsComponent },
    ],
  },
  { path: '**', redirectTo: '/home' }
];
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
