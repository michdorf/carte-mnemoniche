import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CartaMnemonica } from './carta-mnemonica.model';

enum DimensioneFont {
  GRANDE,
  MEDIO,
  PICCOLO
}

@Component({
  selector: 'app-carta-mnemonica',
  templateUrl: './carta-mnemonica.component.html',
  styleUrls: ['./carta-mnemonica.component.css'],
  animations: [
    trigger('capovolto', [
      state('anteriore', style({
        transform: 'rotateY(0deg)'
      })),
      state('posteriore', style({
        // simple flip: transform: 'rotateY(180deg)'
        transform: 'translateX( -100% ) rotateY( -180deg )'
      })),
      transition('anteriore => posteriore', animate('800ms ease-out')),
      transition('posteriore => anteriore', animate('800ms ease-out')),
      transition('void => anteriore', [
        style({opacity: '0'}),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class CartaMnemonicaComponent implements OnInit {
  @Input('flipstate') state;
  @Input('carta') carta: CartaMnemonica;
  @ViewChild('carta') carta_elem: ElementRef;
  @ViewChild('fronte') fronte_elem: ElementRef;
  @ViewChild('dorso') dorso_elem: ElementRef;
  testo_frontale = '';
  testo_dorsale = '';

  constructor() {
  }

  dimensione_font(testo): DimensioneFont {
    if (testo.length < 48){
      return DimensioneFont.GRANDE;
    }else if (testo.length < 128) {
      return DimensioneFont.MEDIO;
    }else {
      return DimensioneFont.PICCOLO;
    }
  }
  dimensiona_testo(elemento: HTMLElement, dimensione: DimensioneFont): void {
    let clas = '';
    switch (dimensione) {
      case DimensioneFont.GRANDE:
        clas = "grande";
        break;
        case DimensioneFont.MEDIO:
        clas = 'medio';
        break;
        case DimensioneFont.PICCOLO:
        clas = 'piccolo';
    }

    elemento.className += elemento.className.indexOf(clas) === -1 ? ' ' + clas : '';
  }

  ingrandisci_testo(): void {
    const fronte = this.fronte_elem.nativeElement;
    const dorso = this.dorso_elem.nativeElement;
    
    this.dimensiona_testo(fronte, this.dimensione_font(this.testo_frontale));
    this.dimensiona_testo(dorso, this.dimensione_font(this.testo_dorsale));
  }

  ngOnInit() {
    this.testo_frontale = this.carta.fronte.testo_formattato;
    this.testo_dorsale = this.carta.dorso.testo_formattato;
    
    this.state = this.state || 'anteriore';
    this.ingrandisci_testo();
  }

  flip() {
    this.state = this.state === 'posteriore' ? 'anteriore' : 'posteriore';
    //const clas = this.carta_elem.nativeElement.className;
    //this.carta_elem.nativeElement.className = clas.indexOf('flipped') === -1 ? clas + ' flipped' : clas.replace(/ flipped/g, '');
  }

}
