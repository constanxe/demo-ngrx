import { createReducer, on } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { clickIncrement, clickReset } from './basic-counter.actions';

const initialState = environment.initialCount;

export const basicCounterReducer = createReducer(
  initialState,
  on(clickIncrement, (state) => state + 1),
  on(clickReset, (state) => initialState)
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/