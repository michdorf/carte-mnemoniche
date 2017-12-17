import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  appStoreProviders
} from './app.store';

import { CarteService } from './carte.service';

import { AppComponent } from './app.component';
import { CartaMnemonicaComponent } from './carta-mnemonica/carta-mnemonica.component';
import { AggCartaComponent } from './agg-carta/agg-carta.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaMnemonicaComponent,
    AggCartaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    appStoreProviders,
    CarteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
