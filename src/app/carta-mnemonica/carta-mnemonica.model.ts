import {Formattatore} from '../formattatore/formattatore.class';

export class CartaMnemonica {
    ID: string;
    fronte: LatoPagina;
    dorso: LatoPagina;
    
    static genera_ID(utente_ID: string) {
        return utente_ID + "-" + Math.round(Date.now()/1000);
    }
}

/**
 * Represents one of the two (or more) sides on a flashcard
 */
export class LatoPagina {
    ID: string;
    private _plaintext: string;
    private _testo_formattato: string;
    set plaintext(plaintext) {
        this._plaintext = plaintext;
        this.formattarlo()
    }
    get plaintext(): string { return this._plaintext; }
    get testo_formattato(): string { return this._testo_formattato; };
    formato: TipoFormato;
    imagine?: string;
    creato: number;
    statistica: Array<StatisticaCarta>;

    constructor(plaintext: string, imagine?: string, formato?: TipoFormato) {
        this.plaintext = plaintext || '';
        this.formato = typeof formato !== 'undefined' ? formato : TipoFormato.SCONOSCIUTO;
        if (imagine) {
            this.imagine=imagine;
        }
        this.creato = Date.now();
        this.statistica = [];

        this.formattarlo();
    }

    agg_punteggio(punteggio: Punteggio) {
        this.statistica.push({
            punteggio: punteggio,
            d_time: Date.now()
        })
    }

    formattarlo(): string {
        switch (this.formato) {
            case TipoFormato.MARKDOWN:
                this._testo_formattato = Formattatore.markdown2html(this.plaintext);
            break;
            case TipoFormato.HTML:
            case TipoFormato.PLAIN:
                this._testo_formattato = this.plaintext.replace(/\n/g, '<br>');
            break;
            default:
                console.warn("Tipo formato non conosciuto in LatoPagina.formattarlo()");
                this._testo_formattato = this.plaintext.replace(/\n/g, '<br>');
        }

        return this._testo_formattato;
    }
}

export enum TipoFormato {
    PLAIN,
    HTML,
    MARKDOWN,
    SCONOSCIUTO
}

interface StatisticaCarta {
    punteggio: Punteggio; 
    d_time: number;
}

enum Punteggio {
    CORETTA,
    FACILE,
    SBAGLIATO,
    DIFFICILE
}