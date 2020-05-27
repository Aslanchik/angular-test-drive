import { Component, OnInit } from '@angular/core';

interface Nav {
  name: string;
  link?: string;
}

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  navs: Nav[] = [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'todo list',
      link: 'todo',
    },
    {
      name: 'tic tac toe',
      link: 'xoxo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
