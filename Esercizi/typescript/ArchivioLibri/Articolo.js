"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articolo = void 0;
var Articolo = /** @class */ (function () {
    function Articolo(titolo, autore, rivista) {
        this.titolo = titolo;
        this.autore = autore;
        this.rivista = rivista;
    }
    Articolo.prototype.info = function () {
        return "Articolo: \"".concat(this.titolo, "\" di ").concat(this.autore, ", pubblicato su \"").concat(this.rivista, "\".");
    };
    return Articolo;
}());
exports.Articolo = Articolo;
