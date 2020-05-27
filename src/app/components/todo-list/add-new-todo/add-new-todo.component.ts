import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../../../interfaces/todo';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss'],
})
export class AddNewTodoComponent {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  todos: Todo[];

  constructor(todoService: TodoserviceService) {
    this.todos = todoService.getTodos();
  }

  onAdd() {
    const todo = {
      id: this.todos.length + 1,
      title: this.title,
      completed: false,
    };
    if (this.title.length) {
      this.addTodo.emit(todo);
    }
    this.title = '';
  }
}
