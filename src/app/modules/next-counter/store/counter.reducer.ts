import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Counter } from '../model/counter.model';
import { increment, decrement, reset } from './counter.actions';

export interface CounterState extends EntityState<Counter> {
  value: number;
}

export const adapter: EntityAdapter<Counter> = createEntityAdapter<Counter>();

export const initialState = adapter.getInitialState({
  value: 0
});

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, value: state.value + 1 })),
  on(decrement, (state) => ({ ...state, value: state.value - 1 })),
  on(reset, (state) => ({ ...state, value: 0 }))
);

export function nextCounterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/