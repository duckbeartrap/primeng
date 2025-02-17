"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./slider");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var SliderModuleNgFactory = i0.ɵcmf(i1.SliderModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.SliderModule, i1.SliderModule, [])]); });
exports.SliderModuleNgFactory = SliderModuleNgFactory;
var styles_Slider = [];
var RenderType_Slider = i0.ɵcrt({ encapsulation: 2, styles: styles_Slider, data: {} });
exports.RenderType_Slider = RenderType_Slider;
function View_Slider_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [["class", "ui-slider-range ui-widget-header ui-corner-all"]], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { "left": 0, width: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, (_co.handleValues[0] + "%"), ((_co.handleValues[1] - _co.handleValues[0]) + "%")); _ck(_v, 2, 0, currVal_0); }, null); }
function View_Slider_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [["class", "ui-slider-range ui-widget-header ui-corner-all"]], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { "bottom": 0, height: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, (_co.handleValues[0] + "%"), ((_co.handleValues[1] - _co.handleValues[0]) + "%")); _ck(_v, 2, 0, currVal_0); }, null); }
function View_Slider_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [["class", "ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all"]], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { "height": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, (_co.handleValue + "%")); _ck(_v, 2, 0, currVal_0); }, null); }
function View_Slider_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [["class", "ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all"]], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { "width": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, (_co.handleValue + "%")); _ck(_v, 2, 0, currVal_0); }, null); }
function View_Slider_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [["class", "ui-slider-handle ui-state-default ui-corner-all ui-clickable"]], [[4, "transition", null]], [[null, "mousedown"], [null, "touchstart"], [null, "touchmove"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("touchstart" === en)) {
        var pd_1 = (_co.onTouchStart($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchmove" === en)) {
        var pd_2 = (_co.onTouchMove($event) !== false);
        ad = (pd_2 && ad);
    } if (("touchend" === en)) {
        var pd_3 = (_co.onTouchEnd($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { "left": 0, "bottom": 1 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 3, 0, ((_co.orientation == "horizontal") ? (_co.handleValue + "%") : null), ((_co.orientation == "vertical") ? (_co.handleValue + "%") : null)); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.dragging ? "none" : null); _ck(_v, 0, 0, currVal_0); }); }
function View_Slider_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "span", [["class", "ui-slider-handle ui-state-default ui-corner-all ui-clickable"]], [[4, "transition", null]], [[null, "mousedown"], [null, "touchstart"], [null, "touchmove"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onMouseDown($event, 0) !== false);
        ad = (pd_0 && ad);
    } if (("touchstart" === en)) {
        var pd_1 = (_co.onTouchStart($event, 0) !== false);
        ad = (pd_1 && ad);
    } if (("touchmove" === en)) {
        var pd_2 = (_co.onTouchMove($event, 0) !== false);
        ad = (pd_2 && ad);
    } if (("touchend" === en)) {
        var pd_3 = (_co.onTouchEnd($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-slider-handle-active": 0 }), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(5, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(6, { "left": 0, "bottom": 1 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = "ui-slider-handle ui-state-default ui-corner-all ui-clickable"; var currVal_2 = _ck(_v, 3, 0, (_co.handleIndex == 0)); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = _ck(_v, 6, 0, _co.rangeStartLeft, _co.rangeStartBottom); _ck(_v, 5, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.dragging ? "none" : null); _ck(_v, 0, 0, currVal_0); }); }
function View_Slider_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "span", [["class", "ui-slider-handle ui-state-default ui-corner-all ui-clickable"]], [[4, "transition", null]], [[null, "mousedown"], [null, "touchstart"], [null, "touchmove"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onMouseDown($event, 1) !== false);
        ad = (pd_0 && ad);
    } if (("touchstart" === en)) {
        var pd_1 = (_co.onTouchStart($event, 1) !== false);
        ad = (pd_1 && ad);
    } if (("touchmove" === en)) {
        var pd_2 = (_co.onTouchMove($event, 1) !== false);
        ad = (pd_2 && ad);
    } if (("touchend" === en)) {
        var pd_3 = (_co.onTouchEnd($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-slider-handle-active": 0 }), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(5, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(6, { "left": 0, "bottom": 1 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = "ui-slider-handle ui-state-default ui-corner-all ui-clickable"; var currVal_2 = _ck(_v, 3, 0, (_co.handleIndex == 1)); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = _ck(_v, 6, 0, _co.rangeEndLeft, _co.rangeEndBottom); _ck(_v, 5, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.dragging ? "none" : null); _ck(_v, 0, 0, currVal_0); }); }
function View_Slider_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 19, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onBarClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-slider ui-widget ui-widget-content ui-corner-all": 0, "ui-state-disabled": 1, "ui-slider-horizontal": 2, "ui-slider-vertical": 3, "ui-slider-animate": 4 }), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(5, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Slider_1)), i0.ɵdid(7, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Slider_2)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Slider_3)), i0.ɵdid(11, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Slider_4)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Slider_5)), i0.ɵdid(15, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Slider_6)), i0.ɵdid(17, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Slider_7)), i0.ɵdid(19, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 3, 0, true, _co.disabled, (_co.orientation == "horizontal"), (_co.orientation == "vertical"), _co.animate); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 5, 0, currVal_2); var currVal_3 = (_co.range && (_co.orientation == "horizontal")); _ck(_v, 7, 0, currVal_3); var currVal_4 = (_co.range && (_co.orientation == "vertical")); _ck(_v, 9, 0, currVal_4); var currVal_5 = (!_co.range && (_co.orientation == "vertical")); _ck(_v, 11, 0, currVal_5); var currVal_6 = (!_co.range && (_co.orientation == "horizontal")); _ck(_v, 13, 0, currVal_6); var currVal_7 = !_co.range; _ck(_v, 15, 0, currVal_7); var currVal_8 = _co.range; _ck(_v, 17, 0, currVal_8); var currVal_9 = _co.range; _ck(_v, 19, 0, currVal_9); }, null); }
exports.View_Slider_0 = View_Slider_0;
function View_Slider_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "p-slider", [], null, null, null, View_Slider_0, RenderType_Slider)), i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.Slider]), i0.ɵdid(2, 180224, null, 0, i1.Slider, [i0.ElementRef, i0.Renderer2, i0.NgZone, i0.ChangeDetectorRef], null, null)], null, null); }
exports.View_Slider_Host_0 = View_Slider_Host_0;
var SliderNgFactory = i0.ɵccf("p-slider", i1.Slider, View_Slider_Host_0, { animate: "animate", disabled: "disabled", min: "min", max: "max", orientation: "orientation", step: "step", range: "range", style: "style", styleClass: "styleClass" }, { onChange: "onChange", onSlideEnd: "onSlideEnd" }, []);
exports.SliderNgFactory = SliderNgFactory;
//# sourceMappingURL=slider.ngfactory.js.map