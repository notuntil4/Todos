import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bool: boolean = false;
  errormessage:string = "";

  constructor(private loginService: LoginService, private router:Router) {
   }

  loginForm:FormGroup = new FormGroup ({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
  })

  ngOnInit() {
  }

  login() {

    this.bool = this.loginService.verifyUser(this.loginForm.value.username, this.loginForm.value.password);
    if(this.bool == false)
      this.errormessage = "Invalid user";
      // error message
    else
      this.router.navigate(['/firstpage']);

    console.warn(this.loginForm.value);
  }

}
