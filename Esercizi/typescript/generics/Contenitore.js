"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contenitore = void 0;
var Contenitore = /** @class */ (function () {
    function Contenitore(valore) {
        this.valore = valore;
    }
    Contenitore.prototype.get = function () {
        return this.valore;
    };
    Contenitore.prototype.set = function (valore) {
        this.valore = valore;
    };
    Contenitore.prototype.descrizione = function () {
        return "la classe contiene un valore di tipo: ".concat(typeof this.valore);
    };
    return Contenitore;
}());
exports.Contenitore = Contenitore;
