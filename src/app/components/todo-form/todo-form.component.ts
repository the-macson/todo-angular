import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';
// import {v4 as uuid} from 'uuid';
import { TodoService } from '../../service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  // id = uuid();
  todoTitle: string = "";
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  handleAdd(){
    const newTodo:Todo = {
      id: Math.random().toString(36).substr(2, 9),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date()
    };
    this.todoService.addTodo(newTodo);
    this.todoTitle = "";
  }
}
