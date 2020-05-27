import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: string;
  @Output('playerClick') click = new EventEmitter<string>();

  onClick() {
    this.click.emit('');
  }
}
