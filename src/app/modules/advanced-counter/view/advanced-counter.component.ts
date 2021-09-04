import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from '../model/advanced-counter.model';
import { clickIncrement, clickReset } from '../store/advanced-counter.actions';
import { getCounterValue } from '../store/advanced-counter.selectors';

@Component({
  selector: 'app-advanced-counter',
  templateUrl: './advanced-counter.component.html',
})
export class AdvancedCounterComponent {
  count$: Observable<number>;
  count: number = 0;

  constructor(private store: Store<{ counter: Counter }>) {
    this.count$ = store.select(getCounterValue);
    this.count$.subscribe(count => this.count = count);
  }

  increment() {
    this.store.dispatch(clickIncrement({ change: 1 }));
  }

  reset() {
    console.log(this.count);
    this.store.dispatch(clickReset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/