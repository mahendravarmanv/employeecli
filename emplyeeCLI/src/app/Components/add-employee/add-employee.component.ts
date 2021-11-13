import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../Services/employee-service.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  name;
  email;
  phone;
  image  = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  showErrorMessage: boolean = false;
  constructor(private employeeService : EmployeeServiceService) { }

  ngOnInit() {}
  
  onSubmit() {
    if(!this.name || !this.email || !this.phone || !this.image) {
      this.showErrorMessage = true;
      setTimeout(() => {
        this.showErrorMessage = false;
      },1000);
      return;
    }
    let obj = {
      id: Math.floor(100000 + Math.random() * 900000),
      name : this.name || '',
      email: this.email || ' ',
      phone: this.phone || ' ',
      src : this.image || ' '
    }
    this.employeeService.addEmployeeDetails(obj); 
  }

}
