import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() { 
    this.todos = [
      {
        id: '111',
        title: 'Todo One',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '222',
        title: 'Todo Two',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'Todo Three',
        isCompleted: false,
        date: new Date()
      }
    ];
  }
  getTodos() {
    return of(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  changeStatus(todo: Todo) {
    this.todos.map(singleTodo => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }
  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(currentObj => currentObj.id == todo.id);
    this.todos.splice(indexofTodo, 1);
  }
}
