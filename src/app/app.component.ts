import { Component } from '@angular/core';
import { Nav } from './models/nav';

@Component({
  selector: 'hn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  navLinks: Nav[] = [];

  constructor() {
    this.navLinks = [
      {
        label: 'News',
        path: 'news'
      },
      {
        label: 'Show',
        path: 'show'
      },
      {
        label: 'Ask',
        path: 'ask'
      },
      {
        label: 'Jobs',
        path: 'jobs'
      }
    ];
  }
}
