import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username?: String;
   password?: String;

  constructor( ) 
  { 
    this.LoginUser()
     
  }
  LoginUser()
  {
    if(this.username == "admin" && this.password == "Admin@123")
     {
      alert("welcome Admin");
    }
    else if (this.username == "user" && this.password == "user@123") 
    {
      alert("welcome user");
    }
  }

  ngOnInit(): void {
  }

  
}
