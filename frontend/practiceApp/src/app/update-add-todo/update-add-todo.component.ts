import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-update-add-todo',
  templateUrl: './update-add-todo.component.html',
  styleUrls: ['./update-add-todo.component.css']
})
export class UpdateAddTodoComponent implements OnInit {

   id :number
    todo :Todo
  constructor(private route : ActivatedRoute,private todoService:TodoDataService,private router :Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.todo=new Todo(this.id,"","","",false )
    if(this.id != -1)
    this.todoService.retrieveTodo("govind",this.id).subscribe(response => this.todo=response)

  }

  saveTodo(){
    console.log("Save Successful!!!")
    if(this.id==-1){
      this.todoService.addTodo("govind",this.todo).subscribe(response=>{
         this.todo=response
         
    
         })
    }
    else{
    this.todoService.updateTodo("govind",this.id,this.todo).subscribe(response =>
      {
        console.log(response)
        this.todo=response
      })
    }
     this.router.navigate(["todos"])

  }

}
