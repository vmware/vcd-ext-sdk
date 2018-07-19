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
var SectionType_1 = require("./../schema/ovf/SectionType");
var LeaseSettingsSectionType = (function (_super) {
    __extends(LeaseSettingsSectionType, _super);
    function LeaseSettingsSectionType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LeaseSettingsSectionType;
}(SectionType_1.SectionType));
exports.LeaseSettingsSectionType = LeaseSettingsSectionType;
(function (LeaseSettingsSectionType) {
    var Fields = (function (_super) {
        __extends(Fields, _super);
        function Fields() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Fields;
    }(SectionType_1.SectionType.Fields));
    LeaseSettingsSectionType.Fields = Fields;
})(LeaseSettingsSectionType = exports.LeaseSettingsSectionType || (exports.LeaseSettingsSectionType = {}));
exports.LeaseSettingsSectionType = LeaseSettingsSectionType;