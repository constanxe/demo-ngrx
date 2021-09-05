import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { environment } from '../../../../environments/environment';
import { Counter } from '../model/advanced-counter.model';
import { increment, reset } from './advanced-counter.actions';

export interface CounterState extends EntityState<Counter> {
  value: number;
}

const adapter: EntityAdapter<Counter> = createEntityAdapter<Counter>();

const initialState = adapter.getInitialState({
  value: environment.initialCount
});

export const advancedCounterReducer = createReducer(
  initialState,
  on(increment, (state, { change }) => ({ ...state, value: state.value + change })),
  on(reset, (state) => ({ ...state, value: environment.initialCount }))
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/