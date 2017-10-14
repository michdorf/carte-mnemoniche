import { Component, Inject } from '@angular/core';

import { AppStore } from './app.store';
import * as Redux from 'redux';
import { AppPart } from './appPart/appPart.model';
import * as AppPartActions from './appPart/appPart.actions';
import {
  AppState,
  getSomethingSpecific
} from './app.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appPart: AppPart;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    const state = this.store.getState();

    // Store the threads list
    this.appPart = getSomethingSpecific(state);
  }

  dispatchState(appPart?: AppPart) {
    appPart = typeof appPart !== 'undefined' ? appPart : this.appPart;
    this.store.dispatch(AppPartActions.setCurrentAppPart(appPart));
  }

  action() {
    this.dispatchState({
        id: this.randomId(),
        name: 'Michele',
        avatarSrc: '/img.png',
        isClient: !!Math.round(Math.random())
    });
  }

  randomId(len?: number): string {
    len = len || 8;
    let r = '';
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#';
    const charStart = 48; const charEnd = 57;

    r += abc.substr(Math.random() * abc.length, 1); // Random letter

    while (r.length < len) {
      r += String.fromCharCode(Math.random() * (charEnd - charStart) + charStart);
    }
    return r;
  }
}
