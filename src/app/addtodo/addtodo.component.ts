import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock.todo';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo.interface';

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
  

  constructor(private myData: TodoService) { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.todo); }

  onSubmit(newTodo: any) { 
    //addTodo place here
    this.addTodo(newTodo);
    this.submitted = true; 
  }

  addTodo(formData: any) {
    let newTodo: any = {id:0, user: JSON.stringify(formData.user), desc: JSON.stringify(formData.desc),
      isDone: formData.isDone, targetDate: formData.targetDate};
    this.myData.addTodo(newTodo)
      .subscribe(
        (data: Todo) => {
          console.log('create: ', data);
        },
        (error: any) => console.log(error),
        () => console.log('completed')
      );
  }

}
