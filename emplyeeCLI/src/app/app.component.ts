import { Component } from '@angular/core';
import { EmployeeServiceService } from '../app/Services/employee-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public employeeService : EmployeeServiceService) { }

  checkLocation() {
    if (!(window.location.href.includes('employee-details'))) {
      return true;
    }else {
      return false;
    }
  }

}
