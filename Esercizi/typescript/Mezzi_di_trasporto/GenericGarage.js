"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericGarage = void 0;
var GenericGarage = /** @class */ (function () {
    function GenericGarage() {
        this.autoParcheggiate = [];
    }
    GenericGarage.prototype.aggiungi = function (elemento) {
        this.autoParcheggiate.push(elemento);
    };
    GenericGarage.prototype.getElementi = function () {
        return this.autoParcheggiate;
    };
    GenericGarage.prototype.getElemento = function (index) {
        return this.autoParcheggiate[index];
    };
    GenericGarage.prototype.setContenuto = function (contenuto) {
        this.contenuto = contenuto;
    };
    GenericGarage.prototype.getContenuto = function () {
        return this.contenuto;
    };
    GenericGarage.prototype.info = function () {
        return "Tipo: ".concat(this.contenuto.info());
    };
    return GenericGarage;
}());
exports.GenericGarage = GenericGarage;
