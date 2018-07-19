"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ParamsType_1 = require("./ParamsType");
var CreateVdcParamsType = (function (_super) {
    __extends(CreateVdcParamsType, _super);
    function CreateVdcParamsType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateVdcParamsType;
}(ParamsType_1.ParamsType));
exports.CreateVdcParamsType = CreateVdcParamsType;
(function (CreateVdcParamsType) {
    var Fields = (function (_super) {
        __extends(Fields, _super);
        function Fields() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Fields;
    }(ParamsType_1.ParamsType.Fields));
    CreateVdcParamsType.Fields = Fields;
})(CreateVdcParamsType = exports.CreateVdcParamsType || (exports.CreateVdcParamsType = {}));
exports.CreateVdcParamsType = CreateVdcParamsType;