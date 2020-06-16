import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
export class Todo{
  constructor(
    public id :number,
    public username: string,
    public description : string,
    public tdate : string,
    public status : boolean
    
    
 ){}
 //long id, String username, String description, String tdate, boolean status  
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent implements OnInit {
  

   message: string
  todos: Todo[]
  constructor(private todoService:TodoDataService,private router:Router) { }
    
  ngOnInit(): void {
     this.refreshTodos()

  }
   refreshTodos(){
    this.todoService.retrieveAlltodose("govind").subscribe(response=>{
      console.log(response)
      this.todos=response})
 
   } 
  deleteButtonAction(id){
    console.log("delete working")

    this.todoService.deleteTodos("govind",id).subscribe(response =>
      {
        console.log(response)
        this.message=`Successfully deleted Todo ${id}`
        this.refreshTodos()

      })

  }

  updateButtonAction(id){

        //this.todoService.updateTodos("govind",id).subscribe()
        this.router.navigate(['todos',id])

  }
  

}
