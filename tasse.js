var Tasse = /** @class */ (function () {
    function Tasse(_redditoAnnuoLordo, _inps, _irpef) {
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.inps = _inps / 100;
        this.irpef = _irpef / 100;
    }
    Tasse.prototype.calcoloTasse = function () {
        var tasseIrpef = this.redditoAnnuoLordo * this.irpef;
        var tasseInps = this.redditoAnnuoLordo * this.inps;
        var getRedditoAnnuoNetto = this.redditoAnnuoLordo - tasseIrpef - tasseInps;
        return {
            tasseIrpef: tasseIrpef,
            tasseInps: tasseInps,
            getRedditoAnnuoNetto: getRedditoAnnuoNetto
        };
    };
    return Tasse;
}());
var professionista = new Tasse(100000, 25, 5);
var risultatoProfessionista = professionista.calcoloTasse();
console.table(risultatoProfessionista);
var artigiano = new Tasse(100000, 15, 15);
var risultatoArtigiano = artigiano.calcoloTasse();
console.table(risultatoArtigiano);
var commerciante = new Tasse(100000, 15, 35);
var risultatoCommerciante = commerciante.calcoloTasse();
console.table(risultatoCommerciante);
