class Bestellingsonderdeel{
    constructor(){
    }
}

class Aankoop extends Bestellingsonderdeel {
    constructor(aantal, produkt){
        super();
        this.aantal = aantal;
        this.produkt = produkt;
    }

    set aantal(value){
        if(value > 0 && Number.isInteger(value)){
            this._aantal = value;
        } else {
            throw new Error("Foutieve ingave voor aantal");
            
        }
    }

    set produkt(produkt){
        if (produkt instanceof Produkt){
            this._produkt = produkt
        } else {
            throw new Error("Foutieve ingave voor produkt");
        }
    }

    get aantal(){
        return this._aantal;
    }

    get produkt(){
        return this._produkt;
    }
}

class Produkt{
    constructor(prijs ,naam){
        this._prijs = prijs;
        this._naam = naam;
    }

    set prijs(value){
        if(value > 0){
            this._prijs = value;
        } else {
            throw new Error("Foutieve ingave voor prijs");
        }
    }
    
    set naam(value){
        if(value.length > 2){
            this._naam = value;
        } else {
            throw new Error("Foutieve ingave voor naam");
        }
    }

    get prijs(){
        return this._prijs;
    }

    get naam(){
        return this._naam;
    }
}

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

class ProcentueleKorting extends Bestellingsonderdeel {
    constructor(kortingProcent){
        super();
        this.kortingProcent = kortingProcent;
    }

    set kortingProcent(value){
        if(value > 0 && value < 100){
            this._kortingProcent = value;
        } else {
            throw new Error("Foutieve ingave voor kortingProcent");
        }
    }

    get kortingProcent(){
        return this._kortingProcent;
    }
}

let product1 = new Produkt(3.55, "Brood");
let product2 = new Produkt(2.33, "Melk");
let bestelling1 = new Bestelling();
let bestellingsonderdeel1 = new Aankoop(2, product1);
let bestellingsonderdeel2 = new Aankoop(14, product2);
let bestellingsonderdeel3 = new ProcentueleKorting(22.2);
let bestellingsonderdeel4 = new ProcentueleKorting(11.4);
bestelling1.voegToe(bestellingsonderdeel1);
bestelling1.voegToe(bestellingsonderdeel2);
bestelling1.voegToe(bestellingsonderdeel3);
bestelling1.voegToe(bestellingsonderdeel4);
console.log(bestelling1.berekenPrijs());