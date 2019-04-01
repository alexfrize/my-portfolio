import { Component, OnInit } from '@angular/core';

export const menuItems = [
  {
    url: '/about',
    text: 'About me'
  },
  {
    url: '/portfolio',
    text: 'Portfolio'
  },
  {
    url: '/experience',
    text: 'Experience'
  },
  {
    url: '/contacts',
    text: 'Contacts'
  }
];

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  menuItems = menuItems;

  constructor() {}

  ngOnInit() {}
}
