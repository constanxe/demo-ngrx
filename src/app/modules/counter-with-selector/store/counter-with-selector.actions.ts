import { createAction, props } from '@ngrx/store';

export const clickIncrement = createAction('[Counter with Selector] Increment', props<{ change: number }>());
export const clickReset = createAction('[Counter with Selector] Reset');


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/