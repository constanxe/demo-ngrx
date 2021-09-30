import { CounterState } from './advanced-counter.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const counterFeatureSelector = createFeatureSelector<CounterState>(
  'advancedCounter'
);

export const getCounterValue = createSelector(
  counterFeatureSelector,
  state => state.value
);
