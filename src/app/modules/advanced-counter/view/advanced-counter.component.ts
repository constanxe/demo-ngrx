import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Counter } from '../model/advanced-counter.model';
import { increment, reset } from '../store/advanced-counter.actions';
import { getCounterValue } from '../store/advanced-counter.selectors';

@Component({
  selector: 'app-advanced-counter',
  templateUrl: './advanced-counter.component.html',
})
export class AdvancedCounterComponent {
  count$: Observable<number>;
  count: number = environment.initialCount;

  constructor(private store: Store<{ advancedCounter: Counter }>) {
    this.count$ = store.select(getCounterValue);
    this.count$.subscribe(count => this.count = count);
  }

  clickIncrement() {
    this.store.dispatch( increment({ change: 1 }));
  }

  clickReset() {
    console.log(this.count);
    this.store.dispatch( reset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/