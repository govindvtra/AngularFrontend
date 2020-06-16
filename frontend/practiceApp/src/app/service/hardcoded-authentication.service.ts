import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  LoginAuthentication(username, password) {
    console.log("before" + this.isUserLoggedin())
    if (password === "dummy" && username === "govind") {
      sessionStorage.setItem('authenticatedUser',username)
      console.log("after" + this.isUserLoggedin())
      return true

    }
    else return false

   
  }

isUserLoggedin(){

   let user= sessionStorage.getItem('authenticatedUser')
  return !(user===null)

}

userLogout(){

  sessionStorage.removeItem('authenticatedUser')
}
  

}
