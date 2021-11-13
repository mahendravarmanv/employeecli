import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../Services/employee-service.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeData = [];

  constructor(public employeeService : EmployeeServiceService,private router: Router) { }

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees() {
    this.employeeService.getEmployeeData()
      .subscribe((res: any) => {
        if (res && res.statusCode == 200) {
          this.employeeData = this.employeeService.getEmployeeDetails();
        }
        else {
          console.warn("Some error occured")
        }
      }, error => {


      })
  }

  gotoEmployeeDetails(item) {
    if(item && item.id) {
      localStorage.setItem('active-emplyee',JSON.stringify(item));
      this.router.navigate([`/employee-details/${item.id}`], { skipLocationChange: false })
    }
  }

}
