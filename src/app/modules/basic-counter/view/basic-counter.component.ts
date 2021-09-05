import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, reset } from '../store/basic-counter.actions';

@Component({
  selector: 'app-basic-counter',
  templateUrl: './basic-counter.component.html',
})
export class BasicCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ basicCount: number }>) {
    this.count$ = store.select('basicCount');
  }

  clickIncrement() {
    this.store.dispatch(increment());
  }

  clickReset() {
    this.store.dispatch(reset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/