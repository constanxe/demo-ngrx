import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from '../model/counter.model';
import { increment, decrement, reset } from '../store/counter.actions';
import { getCounterValue } from '../store/counter.selectors';

@Component({
  selector: 'app-next-counter',
  templateUrl: './counter.component.html',
})
export class NextCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: Counter }>) {
    this.count$ = store.select(getCounterValue);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/