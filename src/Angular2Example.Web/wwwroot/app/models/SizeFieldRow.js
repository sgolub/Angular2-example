"use strict";
var SizeField_1 = require('./SizeField');
var SizeFieldRow = (function () {
    function SizeFieldRow(obj) {
        this.id = null;
        this.name = '';
        this.fields = [];
        this.id = obj.id;
        this.name = obj.name;
        this.fields = obj.fields.map(function (o) { return new SizeField_1.SizeField(o); });
    }
    SizeFieldRow.prototype.total = function () {
        var t = 0, i = this.fields.length;
        while (i--) {
            t += this.fields[i].total();
        }
        return t;
    };
    return SizeFieldRow;
}());
exports.SizeFieldRow = SizeFieldRow;
//# sourceMappingURL=SizeFieldRow.js.map