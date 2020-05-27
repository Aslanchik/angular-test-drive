import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { NavItemComponent } from './components/navigation/nav-item/nav-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list/todo-list-item/todo-list-item.component';
import { HeaderComponent } from './components/header/header.component';
import { AddNewTodoComponent } from './components/todo-list/add-new-todo/add-new-todo.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { BoardComponent } from './components/tic-tac-toe/board/board.component';
import { SquareComponent } from './components/tic-tac-toe/board/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    TodoListComponent,
    TodoListItemComponent,
    HeaderComponent,
    AddNewTodoComponent,
    TicTacToeComponent,
    BoardComponent,
    SquareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
