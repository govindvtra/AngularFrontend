import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  

  constructor(private router: Router,private hardcodedAuthenticationService:HardcodedAuthenticationService, 
    private basicAuthenticationService : BasicAuthenticationService) { }
  username= ""
  password=""
  InvalidCredential= false
  ngOnInit(): void {
  
  
  }

  ButtonClickAction(){
    //console.log("Button click okay")
  
    if(this.hardcodedAuthenticationService.LoginAuthentication(this.username,this. password)==true ){
    //   console.log("Correct Credentials");
    this.router.navigate(['welcome',this.username])
      this.InvalidCredential= false
    }
    else{
    //   console.log("Incorrect Credentials");
     this.InvalidCredential= true
     //this.router.navigate(['error'])

     }
  }


  HandleBasicAuthLogin(){
    //console.log("Button click okay")
  
    this.basicAuthenticationService.BasicAuthentication(this.username,this. password).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.InvalidCredential= false
        
      },
      error=>{
        this.InvalidCredential= true

      }
    )
    //   console.log("Correct Credentials");
   
    }
      
}
