"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maglia = void 0;
var Maglia = /** @class */ (function () {
    function Maglia(colore, taglia, prezzo) {
        this.colore = colore;
        this.taglia = taglia;
        this.prezzo = prezzo;
    }
    Maglia.prototype.mostraPrezzo = function () {
        return "Prezzo: ".concat(this.prezzo);
    };
    Maglia.prototype.info = function () {
        return "Colore: ".concat(this.colore, ", Taglia: ").concat(this.taglia);
    };
    return Maglia;
}());
exports.Maglia = Maglia;
