"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
var Report = /** @class */ (function () {
    function Report(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
    Report.prototype.getId = function () {
        return this.id;
    };
    Report.prototype.getTitle = function () {
        return this.title;
    };
    return Report;
}());
exports.Report = Report;
