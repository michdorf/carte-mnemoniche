import { Injectable, EventEmitter, ApplicationRef } from '@angular/core';
import {CartaMnemonica} from './carta-mnemonica/carta-mnemonica.model';
import {Record, List} from 'immutable';
import { Cloner } from "./cloner";

@Injectable()
export class CarteService {
  get carte() {return this._carte;}
  private _carte: Array<CartaMnemonica> = [];
  onupdate = new EventEmitter<List<CartaMnemonica[]> | any>();

  constructor(private applicationRef: ApplicationRef) { }

  carta_essiste(carta: CartaMnemonica) {
    return this.carte.map(carta => carta.ID).indexOf(carta.ID) !== -1;
  }

  emit_update() {
    this.onupdate.emit(this._carte);
    this.applicationRef.tick();
  }

  formattaCarta(carta: CartaMnemonica) {
    carta.fronte.formattarlo();
    carta.dorso.formattarlo();
  }

  nuovaCarta(carta: CartaMnemonica) {
    if (this.carta_essiste(carta)){
      console.warn("Carta esiste. Non la creo ma la cambiero'");
      return this.cambiaCarta(carta);
    }

    this.formattaCarta(carta);
    this._carte.push(Cloner.clone(carta)); // Immutable
    this.emit_update();

    return this.carte;
  }

  cambiaCarta(carta: CartaMnemonica) {
    if (!this.carta_essiste(carta)){
      console.warn("Carta non esiste. Non la cambio ma la creero'");
      return this.nuovaCarta(carta);
    }

    this.formattaCarta(carta);
    let carte = this._carte;
    for (var i = 0; i < carte.length; i++) {
      if (carte[i].ID === carta.ID) {
        carte[i] = Cloner.clone(carta); // Immutable
      }
    }

    this.emit_update();
    return this.carte;
  }

}
