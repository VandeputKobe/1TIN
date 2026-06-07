const Bestellingsonderdeel = require("./Bestellingsonderdeel");

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

module.exports = ProcentueleKorting;