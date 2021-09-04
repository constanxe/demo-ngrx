import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

const initialState = 0;

export const simpleCounterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/