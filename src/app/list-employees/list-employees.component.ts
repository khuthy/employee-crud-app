import { Component, OnInit } from '@angular/core';
import { Employ } from './employ';
import { EMPLOYS } from  './mock-employ';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

    employs = EMPLOYS;
    //toggle classes
    hide: string = 'less';
    value;
    toggle(): void {
      if(this.hide === 'less'){
        this.hide = 'fine';
      }else{
        this.hide = 'less';
      }
    }
   //end toggle class
    model: any = {};
    model2: any = {};
    alert:string = '';
    count = 0;
    error = '';
    constructor() { }

  ngOnInit() {
  }
  

  addEmployee(){
   
    if(this.model) {
      if(this.employs.push(this.model)){
        this.model = {};
        this.toggle();
      }
      
      
      
    }else{
      this.error = "fields are required";
    }
  }
  editEmployee(i){
    
    this.model2.name     = this.employs[i].name;
    this.model2.email    = this.employs[i].email;
    this.model2.gender   = this.employs[i].gender;
    this.model2.bio      = this.employs[i].bio;
    this.model2.password = this.employs[i].password;
    this.model2.url      = this.employs[i].url;
    this.value          = i;
}
   updateEmployee(k) {
     k = this.value;
     for(var i = 0; i < this.employs.length; i++){
       if(i == k){
         this.employs[i] = this.model2;

         this.model2 = {};
       }
     }
   }
  

  removeEmployee(i) {
  if(confirm("are you sure you want to delete") === true){
    this.employs.splice(i, 1);
    this.alert = "Deleted Successfully";
  }
   
  }




}
