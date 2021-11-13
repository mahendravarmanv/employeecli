import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from '../../Components/employee-details/employee-details.component'
import { EmployeeComponent } from '../../Components/employee/employee.component'
import { AddEmployeeComponent } from '../../Components/add-employee/add-employee.component'

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },

  { path: 'employee', component: EmployeeComponent },

  { path: 'add-employee', component: AddEmployeeComponent },

  { path: 'employee-details/:id', component: EmployeeDetailsComponent },

  { path: '**', redirectTo: '/employee' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
