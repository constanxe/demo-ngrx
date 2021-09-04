import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { basicCounterReducer } from './modules/basic-counter/store/counter.reducer';
import { counterWithSelectorReducer } from './modules/counter-with-selector/store/counter.reducer';
import { BasicCounterComponent } from './modules/basic-counter/view/counter.component';
import { CounterWithSelectorComponent } from './modules/counter-with-selector/view/counter.component';
import { CountComponent } from './components/count.component';

const routes: Routes = [
  { path: 'basic-counter', component: BasicCounterComponent },
  { path: 'counter-with-selector', component: CounterWithSelectorComponent},
  { path: '**', redirectTo: 'basic-counter'}
];

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    BasicCounterComponent,
    CounterWithSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      count: basicCounterReducer,
      counter: counterWithSelectorReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
