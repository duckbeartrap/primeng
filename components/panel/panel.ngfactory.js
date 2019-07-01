"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./panel");
var i2 = require("@angular/common");
var i3 = require("../common/shared");
var PanelModuleNgFactory = i0.ɵcmf(i1.PanelModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(1073742336, i1.PanelModule, i1.PanelModule, [])]); });
exports.PanelModuleNgFactory = PanelModuleNgFactory;
var styles_Panel = [];
var RenderType_Panel = i0.ɵcrt({ encapsulation: 2, styles: styles_Panel, data: { "animation": [{ type: 7, name: "panelContent", definitions: [{ type: 0, name: "hidden", styles: { type: 6, styles: { height: "0", opacity: 0 }, offset: null }, options: undefined }, { type: 0, name: "visible", styles: { type: 6, styles: { height: "*", opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "visible <=> hidden", animation: { type: 4, styles: null, timings: "{{transitionParams}}" }, options: null }], options: {} }] } });
exports.RenderType_Panel = RenderType_Panel;
function View_Panel_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "ui-panel-title"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.header; _ck(_v, 1, 0, currVal_0); }); }
function View_Panel_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["class", "ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default"], ["role", "tab"], ["tabindex", "0"]], [[1, "id", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onIconClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.enter" === en)) {
        var pd_1 = (_co.onIconClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "span", [], [[8, "className", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.id + "-label"); var currVal_1 = (_co.id + "-content"); var currVal_2 = !_co.collapsed; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = (_co.collapsed ? _co.expandIcon : _co.collapseIcon); _ck(_v, 1, 0, currVal_3); }); }
function View_Panel_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onHeaderClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(3, { "ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all": 0, "ui-panel-titlebar-clickable": 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Panel_2)), i0.ɵdid(5, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Panel_3)), i0.ɵdid(8, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, true, (_co.toggleable && (_co.toggler === "header"))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.header; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.toggleable; _ck(_v, 8, 0, currVal_2); }, null); }
function View_Panel_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-panel-footer ui-widget-content"]], null, null, null, null, null)), i0.ɵncd(null, 2)], null, null); }
function View_Panel_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 18, "div", [], [[1, "id", 0]], null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(4, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Panel_1)), i0.ɵdid(6, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(7, 0, null, null, 11, "div", [["class", "ui-panel-content-wrapper"], ["role", "region"]], [[1, "id", 0], [24, "@panelContent", 0], [1, "aria-hidden", 0], [1, "aria-labelledby", 0]], [[null, "@panelContent.done"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("@panelContent.done" === en)) {
        var pd_0 = (_co.onToggleDone($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(9, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(10, { "ui-panel-content-wrapper-overflown": 0 }), i0.ɵpod(11, { transitionParams: 0 }), i0.ɵpod(12, { value: 0, params: 1 }), i0.ɵpod(13, { transitionParams: 0 }), i0.ɵpod(14, { value: 0, params: 1 }), (_l()(), i0.ɵeld(15, 0, null, null, 1, "div", [["class", "ui-panel-content ui-widget-content"]], null, null, null, null, null)), i0.ɵncd(null, 1), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Panel_4)), i0.ɵdid(18, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.styleClass; var currVal_2 = "ui-panel ui-widget ui-widget-content ui-corner-all"; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = _co.style; _ck(_v, 4, 0, currVal_3); var currVal_4 = _co.showHeader; _ck(_v, 6, 0, currVal_4); var currVal_9 = "ui-panel-content-wrapper"; var currVal_10 = _ck(_v, 10, 0, (_co.collapsed || _co.animating)); _ck(_v, 9, 0, currVal_9, currVal_10); var currVal_11 = _co.footerFacet; _ck(_v, 18, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 0, 0, currVal_0); var currVal_5 = (_co.id + "-content"); var currVal_6 = (_co.collapsed ? _ck(_v, 12, 0, "hidden", _ck(_v, 11, 0, _co.transitionOptions)) : _ck(_v, 14, 0, "visible", _ck(_v, 13, 0, _co.transitionOptions))); var currVal_7 = _co.collapsed; var currVal_8 = (_co.id + "-label"); _ck(_v, 7, 0, currVal_5, currVal_6, currVal_7, currVal_8); }); }
exports.View_Panel_0 = View_Panel_0;
function View_Panel_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "p-panel", [], null, null, null, View_Panel_0, RenderType_Panel)), i0.ɵdid(1, 49152, null, 1, i1.Panel, [i0.ElementRef], null, null), i0.ɵqud(603979776, 1, { footerFacet: 0 })], null, null); }
exports.View_Panel_Host_0 = View_Panel_Host_0;
var PanelNgFactory = i0.ɵccf("p-panel", i1.Panel, View_Panel_Host_0, { toggleable: "toggleable", header: "header", collapsed: "collapsed", style: "style", styleClass: "styleClass", expandIcon: "expandIcon", collapseIcon: "collapseIcon", showHeader: "showHeader", toggler: "toggler", transitionOptions: "transitionOptions" }, { collapsedChange: "collapsedChange", onBeforeToggle: "onBeforeToggle", onAfterToggle: "onAfterToggle" }, ["p-header", "*", "p-footer"]);
exports.PanelNgFactory = PanelNgFactory;
//# sourceMappingURL=panel.ngfactory.js.map