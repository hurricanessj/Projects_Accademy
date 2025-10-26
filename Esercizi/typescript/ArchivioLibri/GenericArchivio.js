"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericArchivio = void 0;
var GenericArchivio = /** @class */ (function () {
    function GenericArchivio() {
    }
    GenericArchivio.prototype.getContenuto = function () {
        return this.contenuto;
    };
    GenericArchivio.prototype.setContenuto = function (contenuto) {
        this.contenuto = contenuto;
    };
    GenericArchivio.prototype.info = function () {
        return "tipo: ".concat(this.contenuto.info());
    };
    return GenericArchivio;
}());
exports.GenericArchivio = GenericArchivio;
