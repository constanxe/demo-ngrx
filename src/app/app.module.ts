import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { simpleCounterReducer } from './modules/simple-counter/store/counter.reducer';
import { SimpleCounterComponent } from './modules/simple-counter/component/counter.component';
import { nextCounterReducer } from './modules/next-counter/store/counter.reducer';
import { NextCounterComponent } from './modules/next-counter/component/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCounterComponent,
    NextCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: simpleCounterReducer,
      counter: nextCounterReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
