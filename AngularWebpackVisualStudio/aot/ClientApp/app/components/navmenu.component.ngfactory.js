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
import * as import0 from '../../../../ClientApp/app/components/navmenu.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/common/src/location/location_strategy';
import * as import12 from '@angular/router/src/directives/router_link';
var Wrapper_NavMenuComponent = (function () {
    function Wrapper_NavMenuComponent() {
        this._changed = false;
        this.context = new import0.NavMenuComponent();
    }
    Wrapper_NavMenuComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NavMenuComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_NavMenuComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NavMenuComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NavMenuComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NavMenuComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NavMenuComponent;
}());
export { Wrapper_NavMenuComponent };
var renderType_NavMenuComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_NavMenuComponent_Host0 = (function (_super) {
    __extends(View_NavMenuComponent_Host0, _super);
    function View_NavMenuComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_NavMenuComponent_Host0, renderType_NavMenuComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_NavMenuComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'nav-menu', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_NavMenuComponent0(this.viewUtils, this, 0, this._el_0);
        this._NavMenuComponent_0_3 = new Wrapper_NavMenuComponent();
        this.compView_0.create(this._NavMenuComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._NavMenuComponent_0_3.context);
    };
    View_NavMenuComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NavMenuComponent) && (0 === requestNodeIndex))) {
            return this._NavMenuComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_NavMenuComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavMenuComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NavMenuComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_NavMenuComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NavMenuComponent_Host0;
}(import1.AppView));
export var NavMenuComponentNgFactory = new import7.ComponentFactory('nav-menu', View_NavMenuComponent_Host0, import0.NavMenuComponent);
var styles_NavMenuComponent = [];
var renderType_NavMenuComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_NavMenuComponent, {});
var View_NavMenuComponent0 = (function (_super) {
    __extends(View_NavMenuComponent0, _super);
    function View_NavMenuComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_NavMenuComponent0, renderType_NavMenuComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._arr_15 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_NavMenuComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav', new import3.InlineArray4(4, 'class', 'navbar navbar-default', 'role', 'navigation'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray2(2, 'class', 'navbar-brand'), null);
        this._RouterLinkWithHref_7_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import10.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import11.LocationStrategy, this.parentIndex));
        this._text_8 = this.renderer.createText(this._el_7, 'Portfolio', null);
        this._text_9 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13
        ]), [disposable_0]);
        return null;
    };
    View_NavMenuComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        return notFoundResult;
    };
    View_NavMenuComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this._arr_15('/portfolio');
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLinkWithHref_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this._RouterLinkWithHref_7_3.checkHost(this, this, this._el_7, throwOnChange);
    };
    View_NavMenuComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.ngOnDestroy();
    };
    View_NavMenuComponent0.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_7_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_NavMenuComponent0;
}(import1.AppView));
export { View_NavMenuComponent0 };
