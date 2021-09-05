import { createReducer, on } from '@ngrx/store';
import { increment, reset } from './basic-counter.actions';

const initialState = 0;

export const basicCounterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(reset, (state) => initialState)
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/