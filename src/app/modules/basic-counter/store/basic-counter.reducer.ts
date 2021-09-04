import { createReducer, on } from '@ngrx/store';
import { clickIncrement, clickReset } from './basic-counter.actions';

const initialState = 0;

export const basicCounterReducer = createReducer(
  initialState,
  on(clickIncrement, (state) => state + 1),
  on(clickReset, (state) => 0)
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/