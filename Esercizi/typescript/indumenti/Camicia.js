"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camicia = void 0;
var Camicia = /** @class */ (function () {
    function Camicia(colore, taglia, prezzo) {
        this.colore = colore;
        this.taglia = taglia;
        this.prezzo = prezzo;
    }
    Camicia.prototype.mostraPrezzo = function () {
        return "Prezzo: ".concat(this.prezzo);
    };
    Camicia.prototype.info = function () {
        return " Colore: ".concat(this.colore, ", Taglia: ").concat(this.taglia);
    };
    return Camicia;
}());
exports.Camicia = Camicia;
