"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archive = void 0;
var Archive = /** @class */ (function () {
    function Archive() {
        this.documents = [];
    }
    Archive.prototype.addDocument = function (doc) {
        this.documents.push(doc);
    };
    Archive.prototype.getDocumentById = function (id) {
        return this.documents.find(function (doc) { return doc.getId() == id; });
    };
    Archive.prototype.listTitles = function () {
        return this.documents.map(function (doc) { return doc.getTitle(); });
    };
    return Archive;
}());
exports.Archive = Archive;
