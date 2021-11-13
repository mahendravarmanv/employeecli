import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails: string;

  constructor(private router: Router) { }

  ngOnInit() {
    try {
      this.employeeDetails =  JSON.parse(localStorage.getItem('active-emplyee'));
    } catch (e) {
      console.warn("some error occured",e)
    }
  }

  gotoHome() {
    this.router.navigate([`/employee`])
  }

}
