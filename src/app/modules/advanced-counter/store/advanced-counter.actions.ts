import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Advanced Counter] Increment', props<{ change: number }>());
export const reset = createAction('[Advanced Counter] Reset');


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/