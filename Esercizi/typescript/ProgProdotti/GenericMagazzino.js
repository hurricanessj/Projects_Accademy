"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericMagazino = void 0;
var GenericMagazino = /** @class */ (function () {
    function GenericMagazino() {
        this.items = [];
    }
    GenericMagazino.prototype.aggiungi = function (item) {
        this.items.push(item);
    };
    GenericMagazino.prototype.getTutti = function () {
        return this.items;
    };
    return GenericMagazino;
}());
exports.GenericMagazino = GenericMagazino;
