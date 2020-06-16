import { Component, OnInit } from '@angular/core';
import { MessageDataService } from '../service/data/message-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : ActivatedRoute,private service:MessageDataService) { }
  

  ngOnInit() {
    this.route.snapshot.params ['name']
  
  }
   messageFromService :string
   errorMessageFromService :string
  ButtonClick(){
     console.log (this.service.PrintMessageBean())
     this.service.PrintMessageBean().subscribe(response=>this.PrintResponseFromService(response),error =>this.PrintErrorFromService(error) )
  }


  PrintResponseFromService(response){
    console.log(response)
    console.log(response.message);
    this.messageFromService = response.message
  }

  PrintErrorFromService(error){
    console.log(error)
    console.log(error.error);
    console.log(error.error.message);
    this.errorMessageFromService = error.error.message

  }
  
}
