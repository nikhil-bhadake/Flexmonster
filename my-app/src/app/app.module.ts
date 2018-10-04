import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexmonsterPivotModule } from 'ng-flexmonster';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    FlexmonsterPivotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
