import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container my-3">
      <h1>Counter</h1>

      <ul class="nav nav-tabs my-3">
        <li class="nav-item">
          <a class="nav-link" routerLink="/basic-counter" routerLinkActive="active">Basic</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/advanced-counter" routerLinkActive="active">Advanced</a>
        </li>
      </ul>

      <!-- The routed views render in the <router-outlet>-->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent { }
