import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  appStoreProviders
} from './app.store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    appStoreProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
