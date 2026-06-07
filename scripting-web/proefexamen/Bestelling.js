const Bestellingsonderdeel = require("./Bestellingsonderdeel");
const Aankoop = require("./Aankoop");
const ProcentueleKorting = require("./ProcentueleKorting");
const Produkt = require("./Produkt");

class Bestelling{
    constructor(){
        this._bestellingsonderdelen = [];
    }

    voegToe(object){
        if(object instanceof Bestellingsonderdeel){
            this._bestellingsonderdelen.push(object);
        } else {
            throw new Error("Foutieve ingave voor bestellingsonderdeel");
        }
    }

    berekenPrijs(){
        let totalePrijs = 0;
        let totaleKorting = 0;
        let resultaat = 0;
        for( let i of this._bestellingsonderdelen){
            if( i instanceof Aankoop){
                totalePrijs += i.aantal * i.produkt.prijs
            } else if (i instanceof ProcentueleKorting){
                totaleKorting += i.kortingProcent;
            }
        }
        resultaat = totalePrijs * (1-totaleKorting/100);
        if ( resultaat < 0 ){
            resultaat = 0;
        }
        return resultaat;
    }
}



let produkt1 = new Produkt(3.55, "Brood");
let produkt2 = new Produkt(2.33, "Melk");
let bestelling1 = new Bestelling();
let bestellingsonderdeel1 = new Aankoop(2, produkt1);
let bestellingsonderdeel2 = new Aankoop(14, produkt2);
let bestellingsonderdeel3 = new ProcentueleKorting(22.2);
let bestellingsonderdeel4 = new ProcentueleKorting(11.4);
bestelling1.voegToe(bestellingsonderdeel1);
bestelling1.voegToe(bestellingsonderdeel2);
bestelling1.voegToe(bestellingsonderdeel3);
bestelling1.voegToe(bestellingsonderdeel4);
console.log(bestelling1.berekenPrijs());




    