import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-simple-counter></app-simple-counter>
    <hr>
    <app-next-counter></app-next-counter>
  `,
  styles: []
})
export class AppComponent { }
