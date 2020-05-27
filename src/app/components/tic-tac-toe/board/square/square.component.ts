import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: string;
  @Output('playerClick') click = new EventEmitter<string>();
  // Emit the click with an empty string
  onClick() {
    this.click.emit('');
  }
}
