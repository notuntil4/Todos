import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedin: boolean=false;

  constructor() { }

  verifyUser(username:string, password:string):boolean {

    // post request to your service

    if(username == "orie" && password == "xyz") {
      this.isLoggedin = true;
      return true;
    }
    
    return false;

  }

  isLogged(): boolean {
    return this.isLoggedin;
  }

  logOut() {
    this.isLoggedin = false;
  }

}
