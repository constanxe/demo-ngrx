import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container my-3">
    <h1>Counter</h1>

    <ul class="nav nav-tabs my-3">
      <li class="nav-item">
        <a class="nav-link" routerLink="/simple-counter" routerLinkActive="active">Simple</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/next-counter" routerLinkActive="active">Next</a>
      </li>
    </ul>

    <!-- The routed views render in the <router-outlet>-->
    <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent { }
