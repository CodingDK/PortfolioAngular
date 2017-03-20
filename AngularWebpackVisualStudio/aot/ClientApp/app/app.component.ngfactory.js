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
import * as import0 from '../../../ClientApp/app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../ClientApp/app/components/navmenu.component';
import * as import9 from './components/navmenu.component.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import12 from '@angular/router/src/router_outlet_map';
import * as import13 from '@angular/core/src/linker/component_factory_resolver';
import * as import14 from '@angular/router/src/directives/router_outlet';
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
export { Wrapper_AppComponent };
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
export var AppComponentNgFactory = new import7.ComponentFactory('app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav-menu', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import9.View_NavMenuComponent0(this.viewUtils, this, 0, this._el_0);
        this._NavMenuComponent_0_3 = new import9.Wrapper_NavMenuComponent();
        this.compView_0.create(this._NavMenuComponent_0_3.context);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n  ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n      ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_8 = new import10.ViewContainer(8, 6, this, this._el_8);
        this._RouterOutlet_8_5 = new import11.Wrapper_RouterOutlet(this.parentView.injectorGet(import12.RouterOutletMap, this.parentIndex), this._vc_8.vcRef, this.parentView.injectorGet(import13.ComponentFactoryResolver, this.parentIndex), null);
        this._text_9 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n\n  ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_2, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_2, '\n\n  ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n  ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_2, 'footer', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n      ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'div', new import3.InlineArray2(2, 'class', 'col-lg-12 text-right'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '\n          ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'a', new import3.InlineArray8(8, 'class', 'btn btn-default btn-sm btn-back', 'href', 'https://github.com/CodingDK/', 'target', '_blank', 'title', 'GitHub profil'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n            ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'fa fa-2x fa-github-square'), null);
        this._text_26 = this.renderer.createText(this._el_23, '\n            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_23, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_28 = this.renderer.createText(this._el_27, 'GitHub profil', null);
        this._text_29 = this.renderer.createText(this._el_23, '\n          ', null);
        this._text_30 = this.renderer.createText(this._el_21, ' \n          ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_21, 'a', new import3.InlineArray8(8, 'class', 'btn btn-default btn-sm btn-back', 'href', 'https://www.linkedin.com/in/lasse-dahl-slot/', 'target', '_blank', 'title', 'LinkedIn profil'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_31, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'fa fa-2x fa-linkedin-square'), null);
        this._text_34 = this.renderer.createText(this._el_31, '\n            ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_31, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_36 = this.renderer.createText(this._el_35, 'Linked profil', null);
        this._text_37 = this.renderer.createText(this._el_31, '\n          ', null);
        this._text_38 = this.renderer.createText(this._el_21, '\n        ', null);
        this._text_39 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_19, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_41 = this.renderer.createText(this._el_40, 'Sidst opdateret d. 20 marts 2017', null);
        this._text_42 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_19, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_44 = this.renderer.createText(this._el_43, 'Copyright © ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_43, 'a', new import3.InlineArray4(4, 'href', 'https://www.linkedin.com/in/lasse-dahl-slot/', 'target', '_blank'), null);
        this._text_46 = this.renderer.createText(this._el_45, 'Lasse D. Slot', null);
        this._text_47 = this.renderer.createText(this._el_43, ' - 2017', null);
        this._text_48 = this.renderer.createText(this._el_19, '\n      ', null);
        this._text_49 = this.renderer.createText(this._el_17, '\n    ', null);
        this._text_50 = this.renderer.createText(this._el_15, '\n  ', null);
        this._text_51 = this.renderer.createText(this._el_2, '\n', null);
        this._text_52 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'deactivate', null), this.eventHandler(this.handleEvent_8));
        this._RouterOutlet_8_5.subscribe(this, this.eventHandler(this.handleEvent_8), false, true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._text_52
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import8.NavMenuComponent) && (0 === requestNodeIndex))) {
            return this._NavMenuComponent_0_3.context;
        }
        if (((token === import14.RouterOutlet) && (8 === requestNodeIndex))) {
            return this._RouterOutlet_8_5.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavMenuComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._RouterOutlet_8_5.ngDoCheck(this, this._el_8, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_8.destroyNestedViews();
        this.compView_0.destroy();
        this._RouterOutlet_8_5.ngOnDestroy();
    };
    View_AppComponent0.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'deactivate')) {
            var pd_sub_0 = (this.context.onDeactivate() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent0;
}(import1.AppView));
export { View_AppComponent0 };
