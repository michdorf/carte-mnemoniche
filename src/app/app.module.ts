import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  appStoreProviders
} from './app.store';

import { AppComponent } from './app.component';
import { CartaMnemonicaComponent } from './carta-mnemonica/carta-mnemonica.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaMnemonicaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    appStoreProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
