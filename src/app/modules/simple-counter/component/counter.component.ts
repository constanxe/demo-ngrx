import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clickIncrement, clickDecrement, clickReset } from '../store/counter.actions';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './counter.component.html',
})
export class SimpleCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(clickIncrement());
  }

  decrement() {
    this.store.dispatch(clickDecrement());
  }

  reset() {
    this.store.dispatch(clickReset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/