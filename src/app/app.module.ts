import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CovidAppComponent } from './covid.app.component';
import { CovidEstimatorComponent } from './covid-estimator/covid-estimator.component';

@NgModule({
  declarations: [
    CovidAppComponent,
    CovidEstimatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CovidAppComponent]
})
export class AppModule { }
