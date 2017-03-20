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
import * as import0 from '../../../../ClientApp/app/portfolio/portfolio.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../ClientApp/app/portfolio/shared/portfolio.service';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/router/src/directives/router_link';
import * as import16 from '@angular/core/src/security';
import * as import17 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/common/src/directives/ng_for';
import * as import21 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import22 from '@angular/common/src/directives/ng_if';
var Wrapper_PortfolioComponent = (function () {
    function Wrapper_PortfolioComponent(p0) {
        this._changed = false;
        this.context = new import0.PortfolioComponent(p0);
    }
    Wrapper_PortfolioComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PortfolioComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PortfolioComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_PortfolioComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PortfolioComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PortfolioComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PortfolioComponent;
}());
export { Wrapper_PortfolioComponent };
var renderType_PortfolioComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_PortfolioComponent_Host0 = (function (_super) {
    __extends(View_PortfolioComponent_Host0, _super);
    function View_PortfolioComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PortfolioComponent_Host0, renderType_PortfolioComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PortfolioComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'portfolio', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PortfolioComponent0(this.viewUtils, this, 0, this._el_0);
        this._PortfolioComponent_0_3 = new Wrapper_PortfolioComponent(this.injectorGet(import8.PortfolioService, this.parentIndex));
        this.compView_0.create(this._PortfolioComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._PortfolioComponent_0_3.context);
    };
    View_PortfolioComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PortfolioComponent) && (0 === requestNodeIndex))) {
            return this._PortfolioComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_PortfolioComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PortfolioComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_PortfolioComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_PortfolioComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PortfolioComponent_Host0;
}(import1.AppView));
export var PortfolioComponentNgFactory = new import7.ComponentFactory('portfolio', View_PortfolioComponent_Host0, import0.PortfolioComponent);
var styles_PortfolioComponent = [];
var View_PortfolioComponent1 = (function (_super) {
    __extends(View_PortfolioComponent1, _super);
    function View_PortfolioComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_PortfolioComponent1, renderType_PortfolioComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_PortfolioComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-lg-12 text-center'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'fa fa-spinner fa-spin fa-fw'), null);
        this._text_7 = this.renderer.createText(this._el_4, '\n      Henter indhold...\n    ', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9
        ]), null);
        return null;
    };
    View_PortfolioComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PortfolioComponent1;
}(import1.AppView));
var View_PortfolioComponent3 = (function (_super) {
    __extends(View_PortfolioComponent3, _super);
    function View_PortfolioComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_PortfolioComponent3, renderType_PortfolioComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_15 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._expr_16 = import11.UNINITIALIZED;
        _this._expr_17 = import11.UNINITIALIZED;
        _this._expr_18 = import11.UNINITIALIZED;
        return _this;
    }
    View_PortfolioComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-4 portfolio-item'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._RouterLinkWithHref_2_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import12.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import13.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import14.LocationStrategy, this.parentView.parentIndex));
        this._text_3 = this.renderer.createText(this._el_2, ' ', null);
        this._text_4 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_2, 'img', new import3.InlineArray4(4, 'alt', '', 'class', 'img-responsive'), null);
        this._text_6 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_2, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n  ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13
        ]), [disposable_0]);
        return null;
    };
    View_PortfolioComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._RouterLinkWithHref_2_3.context;
        }
        return notFoundResult;
    };
    View_PortfolioComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this._arr_15('/portfolio', this.context.$implicit.slug);
        this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0, throwOnChange, false);
        this._RouterLinkWithHref_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._RouterLinkWithHref_2_3.checkHost(this, this, this._el_2, throwOnChange);
        var currVal_16 = this.parentView.parentView.context.getImgSrc(this.context.$implicit);
        if (import3.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementProperty(this._el_5, 'src', this.viewUtils.sanitizer.sanitize(import16.SecurityContext.URL, currVal_16));
            this._expr_16 = currVal_16;
        }
        var currVal_17 = import3.inlineInterpolate(1, '', this.context.$implicit.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setText(this._text_8, currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = import3.inlineInterpolate(1, '', this.context.$implicit.subTitle, '');
        if (import3.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setText(this._text_11, currVal_18);
            this._expr_18 = currVal_18;
        }
    };
    View_PortfolioComponent3.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
    };
    View_PortfolioComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_PortfolioComponent3.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_PortfolioComponent3;
}(import1.AppView));
var View_PortfolioComponent2 = (function (_super) {
    __extends(View_PortfolioComponent2, _super);
    function View_PortfolioComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_PortfolioComponent2, renderType_PortfolioComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_PortfolioComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row rowEqualHeight'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import9.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import18.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import17.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.injectorGet(import19.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_PortfolioComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import20.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_PortfolioComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_PortfolioComponent2.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_PortfolioComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_PortfolioComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_PortfolioComponent3(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_PortfolioComponent2;
}(import1.AppView));
var renderType_PortfolioComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_PortfolioComponent, {});
var View_PortfolioComponent0 = (function (_super) {
    __extends(View_PortfolioComponent0, _super);
    function View_PortfolioComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PortfolioComponent0, renderType_PortfolioComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PortfolioComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n  ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'col-lg-12'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'p', new import3.InlineArray2(2, 'class', 'well page-header'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n      Velkommen, Mit navn er Lasse Dahl Slot.', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_5, '\n      På denne side kan du se af mine tidligere skole- og fritidsprojekter, som jeg har været med til at udvikle.', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_5, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_11 = this.renderer.createText(this._el_3, '\n  ', null);
        this._text_12 = this.renderer.createText(this._el_1, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_14 = new import9.ViewContainer(14, null, this, this._anchor_14);
        this._TemplateRef_14_5 = new import18.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import21.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_16 = new import9.ViewContainer(16, null, this, this._anchor_16);
        this._TemplateRef_16_5 = new import18.TemplateRef_(this, 16, this._anchor_16);
        this._NgFor_16_6 = new import17.Wrapper_NgFor(this._vc_16.vcRef, this._TemplateRef_16_5, this.parentView.injectorGet(import19.IterableDiffers, this.parentIndex), this.ref);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._anchor_16
        ]), null);
        return null;
    };
    View_PortfolioComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import22.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === import18.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import20.NgFor) && (16 === requestNodeIndex))) {
            return this._NgFor_16_6.context;
        }
        return notFoundResult;
    };
    View_PortfolioComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_14_0_0 = this.context.showLoader;
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        var currVal_16_0_0 = this.context.rows;
        this._NgFor_16_6.check_ngForOf(currVal_16_0_0, throwOnChange, false);
        this._NgFor_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
    };
    View_PortfolioComponent0.prototype.destroyInternal = function () {
        this._vc_14.destroyNestedViews();
        this._vc_16.destroyNestedViews();
    };
    View_PortfolioComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 14)) {
            return new View_PortfolioComponent1(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        if ((nodeIndex == 16)) {
            return new View_PortfolioComponent2(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        return null;
    };
    return View_PortfolioComponent0;
}(import1.AppView));
export { View_PortfolioComponent0 };
