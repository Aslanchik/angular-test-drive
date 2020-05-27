import { Component, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[];

  constructor(todoService: TodoserviceService) {
    this.todos = todoService.getTodos();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
