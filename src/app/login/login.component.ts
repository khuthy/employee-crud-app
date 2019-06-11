import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
      title ='Login System';
  constructor() { }

  ngOnInit() {
  }
error: string = '';
   //login System Function 

   loginUser($event) {
    $event.preventDefault();
    const target = $event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username+" "+password);
    
   if(username == 'admin' && password == '12345') {
     window.location.href = "/list-employees";

   }else {
     this.error = "Username/Password is Incorrect";
   }
    
  }

}
