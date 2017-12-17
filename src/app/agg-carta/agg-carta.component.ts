import { Component, OnInit } from '@angular/core';
import {CartaMnemonica, LatoPagina, TipoFormato} from '../carta-mnemonica/carta-mnemonica.model';
import { CarteService } from '../carte.service';

@Component({
  selector: 'app-agg-carta',
  templateUrl: './agg-carta.component.html',
  styleUrls: ['./agg-carta.component.css']
})
export class AggCartaComponent implements OnInit {
  esistente = false; // Se sia una nuova carta o carta esistente
  carta: CartaMnemonica;

  constructor(private cs: CarteService) {
    this.nuova();
  }

  nuova() {
    this.carta = {
      ID: CartaMnemonica.genera_ID("michele"),
      fronte: new LatoPagina('Forsiden', '', TipoFormato.MARKDOWN),
      dorso: new LatoPagina('Bagsiden', '', TipoFormato.MARKDOWN),
    };

    this.esistente = false;
  }

  ngOnInit() {
  }

  salva() {
    if (this.esistente){
      this.cs.cambiaCarta(Object.assign({}, this.carta));
    }else {
      this.cs.nuovaCarta(Object.assign({}, this.carta));
      this.esistente = true;
    }
    console.log("Ha salvato: ", this.carta);
  }

}
