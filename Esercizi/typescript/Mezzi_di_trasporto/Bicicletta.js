"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicletta = void 0;
var Bicicletta = /** @class */ (function () {
    function Bicicletta(nome, velocitaMassima, tipo) {
        this.nome = nome;
        this.velocitaMassima = velocitaMassima;
        this.tipo = tipo;
    }
    Bicicletta.prototype.getTipo = function () {
        return this.tipo;
    };
    Bicicletta.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Bicicletta.prototype.info = function () {
        return "Nome: ".concat(this.nome, ", velocita massima: ").concat(this.velocitaMassima, " Numero di Porte: ").concat(this.tipo);
    };
    return Bicicletta;
}());
exports.Bicicletta = Bicicletta;
