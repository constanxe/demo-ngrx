import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Counter } from '../model/counter.model';
import { clickIncrement, clickDecrement, clickReset } from './counter.actions';

export interface CounterState extends EntityState<Counter> {
  value: number;
}

const adapter: EntityAdapter<Counter> = createEntityAdapter<Counter>();

const initialState = adapter.getInitialState({
  value: 0
});

export const counterWithSelectorReducer = createReducer(
  initialState,
  on(clickIncrement, (state) => ({ ...state, value: state.value + 1 })),
  on(clickDecrement, (state) => ({ ...state, value: state.value - 1 })),
  on(clickReset, (state) => ({ ...state, value: 0 }))
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/