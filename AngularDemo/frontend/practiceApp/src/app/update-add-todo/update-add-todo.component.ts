import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route : ActivatedRoute,private todoService:TodoDataService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.todo=new Todo(1,"","govind",new Date().toDateString(),false )
    console.log(this.todoService.retrieveTodo("govind",this.id).subscribe(response => this.todo=response))

  }

  saveTodo(){
    console.log("Save Successful!!!")
    console.log(this.id)
  }

}
