import { CounterState } from './counter-with-selector.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const courseFeatureSelector = createFeatureSelector<CounterState>('counter');

export const getCounterValue = createSelector(
  courseFeatureSelector,
  state => state.value
);
