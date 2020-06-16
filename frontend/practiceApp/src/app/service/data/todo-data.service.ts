import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todos/todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAlltodose(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodos(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username,id,todos){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,todos)
  }
   
  addTodo(username,todos){
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos/`,todos)
  }
  }

  
