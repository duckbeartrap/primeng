"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./messages");
var i2 = require("@angular/common");
var i3 = require("../common/messageservice");
var MessagesModuleNgFactory = i0.ɵcmf(i1.MessagesModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.MessagesModule, i1.MessagesModule, [])]); });
exports.MessagesModuleNgFactory = MessagesModuleNgFactory;
var styles_Messages = [];
var RenderType_Messages = i0.ɵcrt({ encapsulation: 2, styles: styles_Messages, data: { "animation": [{ type: 7, name: "messageAnimation", definitions: [{ type: 0, name: "visible", styles: { type: 6, styles: { transform: "translateY(0)", opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "void => *", animation: [{ type: 6, styles: { transform: "translateY(-25%)", opacity: 0 }, offset: null }, { type: 4, styles: null, timings: "{{showTransitionParams}}" }], options: null }, { type: 1, expr: "* => void", animation: [{ type: 4, styles: { type: 6, styles: { opacity: 0, transform: "translateY(-25%)" }, offset: null }, timings: "{{hideTransitionParams}}" }], options: null }], options: {} }] } });
exports.RenderType_Messages = RenderType_Messages;
function View_Messages_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["class", "ui-messages-close"], ["tabindex", "0"]], null, [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clear($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.enter" === en)) {
        var pd_1 = (_co.clear($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "i", [["class", "pi pi-times"]], null, null, null, null, null))], null, null); }
function View_Messages_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "span", [["class", "ui-messages-summary"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.summary; _ck(_v, 0, 0, currVal_0); }); }
function View_Messages_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "span", [["class", "ui-messages-detail"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.detail; _ck(_v, 0, 0, currVal_0); }); }
function View_Messages_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Messages_4)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Messages_5)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.summary; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.detail; _ck(_v, 4, 0, currVal_1); }, null); }
function View_Messages_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 15, "div", [["class", "ui-messages ui-widget ui-corner-all"]], [[24, "@messageAnimation", 0]], null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-messages-info": 0, "ui-messages-warn": 1, "ui-messages-error": 2, "ui-messages-success": 3 }), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(5, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(6, { showTransitionParams: 0, hideTransitionParams: 1 }), i0.ɵpod(7, { value: 0, params: 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Messages_2)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 2, "span", [["class", "ui-messages-icon pi"]], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(12, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵeld(13, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Messages_3)), i0.ɵdid(15, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.styleClass; var currVal_2 = _ck(_v, 3, 0, (_co.value[0].severity === "info"), (_co.value[0].severity === "warn"), (_co.value[0].severity === "error"), (_co.value[0].severity === "success")); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = _co.style; _ck(_v, 5, 0, currVal_3); var currVal_4 = _co.closable; _ck(_v, 9, 0, currVal_4); var currVal_5 = "ui-messages-icon pi"; var currVal_6 = _co.icon; _ck(_v, 12, 0, currVal_5, currVal_6); var currVal_7 = _co.value; _ck(_v, 15, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 7, 0, "visible", _ck(_v, 6, 0, _co.showTransitionOptions, _co.hideTransitionOptions)); _ck(_v, 0, 0, currVal_0); }); }
function View_Messages_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Messages_1)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasMessages(); _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_Messages_0 = View_Messages_0;
function View_Messages_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-messages", [], null, null, null, View_Messages_0, RenderType_Messages)), i0.ɵdid(1, 245760, null, 0, i1.Messages, [[2, i3.MessageService]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_Messages_Host_0 = View_Messages_Host_0;
var MessagesNgFactory = i0.ɵccf("p-messages", i1.Messages, View_Messages_Host_0, { value: "value", closable: "closable", style: "style", styleClass: "styleClass", enableService: "enableService", key: "key", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, { valueChange: "valueChange" }, []);
exports.MessagesNgFactory = MessagesNgFactory;
//# sourceMappingURL=messages.ngfactory.js.map