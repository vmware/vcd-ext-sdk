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
/*
 * Copyright (c) 2018 VMware, Inc. All rights reserved.
 */
var MultisiteType_1 = require("./MultisiteType");
var SiteAssociationType = (function (_super) {
    __extends(SiteAssociationType, _super);
    function SiteAssociationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SiteAssociationType;
}(MultisiteType_1.MultisiteType));
exports.SiteAssociationType = SiteAssociationType;
(function (SiteAssociationType) {
    var Fields = (function (_super) {
        __extends(Fields, _super);
        function Fields() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Fields;
    }(MultisiteType_1.MultisiteType.Fields));
    SiteAssociationType.Fields = Fields;
})(SiteAssociationType = exports.SiteAssociationType || (exports.SiteAssociationType = {}));
exports.SiteAssociationType = SiteAssociationType;
