"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SizeFieldRow_1 = require('../models/SizeFieldRow');
var InventoryService_1 = require('../services/InventoryService');
var SizePageComponent = (function () {
    function SizePageComponent(inventoryService) {
        this.inventoryService = inventoryService;
        this.readonlyMode = false;
    }
    SizePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inventoryService.getInventory().subscribe(function (sizes) {
            _this.sizes = sizes.map(function (o) {
                o.rows = o.inventory.map(function (r) { return new SizeFieldRow_1.SizeFieldRow(r); });
                return o;
            });
        });
        //this.selectedSize = this.sizes[0];
        //this.onSizeChanged();
    };
    SizePageComponent.prototype.onSizeChanged = function (selectedSize) {
        //this.selectedSize = selectedSize;
    };
    SizePageComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/size/size-page.component.html',
            providers: [InventoryService_1.InventoryService]
        }), 
        __metadata('design:paramtypes', [InventoryService_1.InventoryService])
    ], SizePageComponent);
    return SizePageComponent;
}());
exports.SizePageComponent = SizePageComponent;
//# sourceMappingURL=size-page.component.js.map