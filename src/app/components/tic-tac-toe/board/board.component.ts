import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/interfaces/square';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: string[] = [];
  turn: string = 'X';
  gameover = false;
  winner = null;

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.squares[i] = null;
    }
  }
  startGame() {
    for (let i = 0; i < 9; i++) {
      this.squares[i] = null;
    }
    this.turn = 'X';
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(id: number) {
    if (!this.gameover) {
      if (this.squares[id] === null) {
        this.squares[id] = this.turn;
        this.changeTurn();
        this.checkWinner();
      }
    }
  }
  changeTurn() {
    if (this.turn === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }
  checkWinner() {
    let winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let pattern of winPatterns) {
      if (
        this.squares[pattern[0]] === this.squares[pattern[1]] &&
        this.squares[pattern[1]] === this.squares[pattern[2]] &&
        this.squares[pattern[0]] !== null
      ) {
        this.gameover = true;
        this.winner = this.squares[pattern[0]];
        return;
      }
    }
    let cell = 0;
    this.squares.forEach((e) => {
      cell += e !== null ? 1 : 0;
    });
    if (cell === 9) {
      this.gameover = true;
      this.winner = 'tie';
    }
  }
}
