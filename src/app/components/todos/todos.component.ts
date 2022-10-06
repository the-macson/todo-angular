import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from '../../model/Todo';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[] =[{id: '111',title: 'Todo One',isCompleted: true,date: new Date()}];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos;
    })
  }
  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo);
  }
  deleteTodoItem(todo:Todo){
    this.todoService.deleteTodo(todo);
  }
}
