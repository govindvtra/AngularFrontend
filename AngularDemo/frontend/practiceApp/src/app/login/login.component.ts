import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  

  constructor(private router: Router) { }
  username= "govind"
  password=" "
  InvalidCredential= true
  ngOnInit(): void {
  
  
  }

  ButtonClickAction(){
    //console.log("Button click okay")
    if(this.password==="dummy" && this.username==="govind"){
      console.log("Correct Credentials");
      this.router.navigate(['welcome',this.username])
      this.InvalidCredential= false
    }
    else{
      console.log("Incorrect Credentials");
      this.InvalidCredential= true
      this.router.navigate(['error'])

    }
  }

}
