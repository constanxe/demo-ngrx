import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from '../model/counter-with-selector.model';
import { clickIncrement, clickReset } from '../store/counter-with-selector.actions';
import { getCounterValue } from '../store/counter-with-selector.selectors';

@Component({
  selector: 'app-counter-with-selector',
  templateUrl: './counter-with-selector.component.html',
})
export class CounterWithSelectorComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: Counter }>) {
    this.count$ = store.select(getCounterValue);
  }

  increment() {
    this.store.dispatch(clickIncrement({ change: 1 }));
  }

  reset() {
    this.store.dispatch(clickReset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/