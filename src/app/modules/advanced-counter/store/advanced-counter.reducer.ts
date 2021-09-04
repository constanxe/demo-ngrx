import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Counter } from '../model/advanced-counter.model';
import { clickIncrement, clickReset } from './advanced-counter.actions';

export interface CounterState extends EntityState<Counter> {
  value: number;
}

const adapter: EntityAdapter<Counter> = createEntityAdapter<Counter>();

const initialState = adapter.getInitialState({
  value: 0
});

export const advancedCounterReducer = createReducer(
  initialState,
  on(clickIncrement, (state, { change }) => ({ ...state, value: state.value + change })),
  on(clickReset, (state) => ({ ...state, value: 0 }))
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/