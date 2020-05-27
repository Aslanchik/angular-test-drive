import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="row">
      <div class="col-12">
        <div class="pt-3 ml-4">
          <h3><i [ngClass]="icon"></i> {{ name | titlecase }}</h3>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() icon: string = '';
  @Input() name: string = 'name';

  constructor() {}

  ngOnInit(): void {}
}
