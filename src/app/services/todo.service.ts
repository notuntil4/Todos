import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // end-point url
  baseURL: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { } // instanciates http class

  // gets all the todos as an observable
  getTodos(): Observable<Todo[]> {
    console.log('getting all todos');
    return this.http.get<Todo[]>(`${this.baseURL}/todos`);
  }

  // get single todo based on id
  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseURL}/todos/${id}`);
  }

  // create a todo
  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseURL}/addtodo`, newTodo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // update a todo
  updateTodo(editedTodo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseURL}/updatetodo`,
      editedTodo, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  // delete a todo
  deleteTodo(id: number): Observable<Todo>{
    return this.http.delete<Todo>(`${this.baseURL}/deletetodo/${id}`);
  }

}
