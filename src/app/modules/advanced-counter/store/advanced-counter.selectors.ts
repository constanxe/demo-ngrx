import { CounterState } from './advanced-counter.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const courseFeatureSelector = createFeatureSelector<CounterState>('counter');

export const getCounterValue = createSelector(
  courseFeatureSelector,
  state => state.value
);