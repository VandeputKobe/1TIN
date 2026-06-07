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

module.exports = Produkt;