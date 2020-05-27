import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  private _todos: Todo[] = [
    {
      title: 'Create todo list',
      completed: false,
    },
  ];
  getTodos(): Todo[] {
    return this._todos;
  }
}
