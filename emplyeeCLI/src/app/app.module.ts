import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/routing/app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeServiceService } from './Services/employee-service.service';
import { ModalComponent } from './Components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    ModalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
