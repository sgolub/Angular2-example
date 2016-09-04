"use strict";
var SizeField = (function () {
    function SizeField(obj) {
        this.id = null;
        this.labelId = null;
        this.size = 0;
        this.label = '';
        this.delta = 0;
        this.qty = 0;
        this.id = obj.id;
        this.labelId = obj.labelId;
        this.size = obj.size;
        this.label = obj.label;
        this.delta = obj.delta;
        this.qty = obj.qty;
    }
    SizeField.prototype.isChanged = function () {
        return Number(this.delta) !== 0;
    };
    SizeField.prototype.total = function () {
        //this.qty = Number(this.qty);
        //this.delta = Number(this.delta);
        var total = Number(this.qty) + Number(this.delta);
        if (isNaN(total) || total < 0) {
            this.delta = -this.qty;
            return 0;
        }
        return total <= 0 ? 0 : total;
    };
    SizeField.prototype.getData = function () {
        return {
            id: this.id,
            labelId: this.labelId,
            size: this.size,
            delta: Number(this.delta)
        };
    };
    return SizeField;
}());
exports.SizeField = SizeField;
//# sourceMappingURL=SizeField.js.map