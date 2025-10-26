var DipendenteTempoPieno = /** @class */ (function () {
    function DipendenteTempoPieno(nome, cognome, stipendioMensile) {
        this.nome = nome;
        this.cognome = cognome;
        this.stipendioMensile = stipendioMensile;
    }
    DipendenteTempoPieno.prototype.calcolaStipendio = function () {
        return this.stipendioMensile;
    };
    return DipendenteTempoPieno;
}());
var DipendentePartTime = /** @class */ (function () {
    function DipendentePartTime(nome, cognome, oreLavorate, pagaOraria) {
        this.nome = nome;
        this.cognome = cognome;
        this.oreLavorate = oreLavorate;
        this.pagaOraria = pagaOraria;
    }
    DipendentePartTime.prototype.calcolaStipendio = function () {
        return this.oreLavorate * this.pagaOraria;
    };
    return DipendentePartTime;
}());
var listaDipendenti = [
    new DipendenteTempoPieno("Mario", "Rossi", 2000),
    new DipendentePartTime("Luca", "Bianchi", 80, 15)
];
function stampaStipendi(dipendenti) {
    dipendenti.forEach(function (d) {
        console.log("".concat(d.nome, " ").concat(d.cognome, " - Stipendio: \u20AC").concat(d.calcolaStipendio()));
    });
}
stampaStipendi(listaDipendenti);
