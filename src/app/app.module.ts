import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { basicCounterReducer } from './modules/basic-counter/store/basic-counter.reducer';
import { advancedCounterReducer } from './modules/advanced-counter/store/advanced-counter.reducer';
import { BasicCounterComponent } from './modules/basic-counter/view/basic-counter.component';
import { AdvancedCounterComponent } from './modules/advanced-counter/view/advanced-counter.component';
import { CountComponent } from './components/count.component';

const routes: Routes = [
  { path: 'basic-counter', component: BasicCounterComponent },
  { path: 'advanced-counter', component: AdvancedCounterComponent},
  { path: '**', redirectTo: 'basic-counter'}
];

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    BasicCounterComponent,
    AdvancedCounterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      count: basicCounterReducer,
      counter: advancedCounterReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
