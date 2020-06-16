import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  constructor(private http:HttpClient) { }


   

  PrintMessageBean(name){
   let basicAuthHeaderString=this.createBasicAuthHttpHeaders()
   let headers= new HttpHeaders({
     
    Authorization: basicAuthHeaderString})
   
    return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`,{headers})
  }

  createBasicAuthHttpHeaders(){
    let un='govind'
    let pa='dummy'
    let basicAuthHeaderString='Basic ' + window.btoa(un +':'+ pa )
    return basicAuthHeaderString
  }
}
