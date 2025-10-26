"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    Repository.prototype.getById = function (id) {
        return this.items.find(function (item) { return item.id == id; });
    };
    Repository.prototype.removeById = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    };
    return Repository;
}());
exports.Repository = Repository;
