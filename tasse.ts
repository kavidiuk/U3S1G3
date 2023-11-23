class Tasse {
  inps: number;
  irpef: number;
  redditoAnnuoLordo: number;
  constructor(_redditoAnnuoLordo: number, _inps: number, _irpef: number) {
    this.redditoAnnuoLordo = _redditoAnnuoLordo;
    this.inps = _inps/100;
    this.irpef = _irpef/100;
  }

  calcoloTasse() {
    const tasseIrpef = this.redditoAnnuoLordo * this.irpef;
    const tasseInps = this.redditoAnnuoLordo * this.inps;
    const getRedditoAnnuoNetto =
      this.redditoAnnuoLordo - tasseIrpef - tasseInps;

    return {
      tasseIrpef,
      tasseInps,
      getRedditoAnnuoNetto
    };
  }
}

let professionista = new Tasse(100000, 25, 5);
let risultatoProfessionista = professionista.calcoloTasse();
console.table(risultatoProfessionista);


let artigiano = new Tasse (100000,15,15);
let risultatoArtigiano = artigiano.calcoloTasse();
console.table(risultatoArtigiano);

let commerciante = new Tasse(100000,15,35);
let risultatoCommerciante = commerciante.calcoloTasse();
console.table(risultatoCommerciante);