"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(id, title, amount) {
        this.id = id;
        this.title = title;
        this.amount = amount;
    }
    Invoice.prototype.getId = function () {
        return this.id;
    };
    Invoice.prototype.getTitle = function () {
        return this.title;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
