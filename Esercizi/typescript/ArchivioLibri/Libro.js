"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titolo, autore, numeroPagine) {
        this.titolo = titolo;
        this.autore = autore;
        this.numeroPagine = numeroPagine;
    }
    Libro.prototype.info = function () {
        return "Libro: \"".concat(this.titolo, "\" di ").concat(this.autore, ", ").concat(this.numeroPagine, " pagine.");
    };
    return Libro;
}());
exports.Libro = Libro;
