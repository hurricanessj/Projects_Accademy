"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(nome, velocitaMassima, numeroPorte) {
        this.nome = nome;
        this.velocitaMassima = velocitaMassima;
        this.numeroPorte = numeroPorte;
    }
    Auto.prototype.info = function () {
        return "Nome: ".concat(this.nome, ", velocita massima: ").concat(this.velocitaMassima, " Numero di Porte: ").concat(this.velocitaMassima);
    };
    return Auto;
}());
exports.Auto = Auto;
