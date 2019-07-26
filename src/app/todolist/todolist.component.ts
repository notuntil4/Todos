import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {

  todos: Todo[];
  notDisplay:boolean = true;

  displayedColumns: any[] = ['id', 'username', 'title', 'completed', 'targetDate'];

  constructor(private myData: TodoService) { }

  ngOnInit():void {
    this.getAllTodos();
  }

  // subscribe to the getTodo method and get all the todos
  getAllTodos() {
    this.myData.getTodos()
      .subscribe(
        (data: Todo[]) => {
          this.todos = data;
          if (this.todos.length > 0)
            this.notDisplay = true;
          else
            this.notDisplay = false;
        },
        (error: any)  => console.log(error),
        ()=> console.log('gets all todos')
      );
  }

  // deletes a todo
  deleteATodo(id: number) {
    this.myData.deleteTodo(id)
      .subscribe(
        (res: any) => this.getAllTodos(),
        (error: any) => console.log(error),
        () => console.log('deleted todo with id ' + id)
      );
  }

}
