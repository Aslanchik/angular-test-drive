import {
  Component,
  Output,
  Input,
  HostListener,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: string;
  @Output('playerClick') click = new EventEmitter<string>();
  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }

  constructor() {}

  ngOnInit(): void {}
}
