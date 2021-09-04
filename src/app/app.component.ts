import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Counter</h1>
    <nav>
      <ul>
        <li><a routerLink="/simple-counter" routerLinkActive="active">Simple</a></li>
        <li><a routerLink="/next-counter" routerLinkActive="active">Next</a></li>
      </ul>
    </nav>
    <!-- The routed views render in the <router-outlet>-->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent { }
