import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Counter } from '../model/counter-with-selector.model';
import { clickIncrement, clickReset } from './counter-with-selector.actions';

export interface CounterState extends EntityState<Counter> {
  value: number;
}

const adapter: EntityAdapter<Counter> = createEntityAdapter<Counter>();

const initialState = adapter.getInitialState({
  value: 0
});

export const counterWithSelectorReducer = createReducer(
  initialState,
  on(clickIncrement, (state, { change }) => ({ ...state, value: state.value + change })),
  on(clickReset, (state) => ({ ...state, value: 0 }))
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/