import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { simpleCounterReducer } from './modules/simple-counter/store/counter.reducer';
import { counterWithSelectorReducer } from './modules/counter-with-selector/store/counter.reducer';
import { SimpleCounterComponent } from './modules/simple-counter/component/counter.component';
import { CounterWithSelectorComponent } from './modules/counter-with-selector/component/counter.component';

const routes: Routes = [
  { path: 'simple-counter', component: SimpleCounterComponent },
  { path: 'counter-with-selector', component: CounterWithSelectorComponent},
  { path: '**', redirectTo: 'simple-counter'}
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleCounterComponent,
    CounterWithSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      count: simpleCounterReducer,
      counter: counterWithSelectorReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
