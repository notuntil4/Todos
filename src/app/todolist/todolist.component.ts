import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock.todo';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos:any[] = TODOS;
  displayedColumns: any[] = ['id', 'username', 'title', 'completed', 'targetDate'];

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(todo: number) {
    
  }

}
