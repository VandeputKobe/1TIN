const Bestellingsonderdeel = require("./Bestellingsonderdeel");
const Produkt = require("./Produkt");

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

module.exports = Aankoop;