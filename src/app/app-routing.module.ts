import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  { path: 'todo', component: TodoListComponent },
  { path: 'xoxo', component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
