import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { BinaryOperator } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http:HttpClient) { }


   

  BasicAuthentication(username, password){
  
    let basicAuthHeaderString='Basic ' + window.btoa(username +':'+ password )
   
   let headers= new HttpHeaders({
     
    Authorization: basicAuthHeaderString})
   
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basic-auth`,{headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticatedUser',username)
          return data
        }
      )
    )
  }

 


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

export class AuthenticationBean{
  constructor(public message : string){ }
}
