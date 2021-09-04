import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from '../model/counter.model';
import { clickIncrement, clickDecrement, clickReset } from '../store/counter.actions';
import { getCounterValue } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-with-selector',
  templateUrl: './counter.component.html',
})
export class CounterWithSelectorComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: Counter }>) {
    this.count$ = store.select(getCounterValue);
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