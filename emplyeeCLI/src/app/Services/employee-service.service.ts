import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployeeServiceService {
  employeeDetails = [];
  showAddModal:boolean = false;

  constructor(private http: HttpClient) { }
   
  public getEmployeeData() {
    let successReturnObject = {
      statusCode: 200,
      message: 'successfull.'

    },
      errorReturnData = {
        statusCode: 400,
        message: 'User does not exit.'
      };
    return this.http.get("assets/sampleJSON/employee.json").pipe(map((res: any) => {
      this.employeeDetails = res;
      return successReturnObject;
    }));
  }
  
  getEmployeeDetails() {
    return this.employeeDetails;
  }

  addEmployeeDetails(detail) {
    if(detail) {
      this.employeeDetails.push(detail);
      this.showAddModal = false;
    }
  }

}
