import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock.todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  todo = 
    {
      "username": "",
      "id": 0,
      "title": "",
      "completed": false,
      "targetDate": null
    }

    submitted = false;
  

  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.todo); }

  onSubmit() { 
    this.submitted = true; 
  }

  addTodo(newTodo:any ) {
    TODOS.push(newTodo);
  }

}
