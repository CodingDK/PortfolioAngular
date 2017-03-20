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
import * as import0 from '../../../../../ClientApp/app/portfolio/portfolio-detail/portfolio-detail.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router_state';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../../../../../ClientApp/app/portfolio/shared/portfolio.service';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '@angular/core/src/security';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import21 from '@angular/common/src/location/location_strategy';
import * as import22 from '@angular/router/src/directives/router_link';
var Wrapper_PortfolioDetailComponent = (function () {
    function Wrapper_PortfolioDetailComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.PortfolioDetailComponent(p0, p1, p2);
    }
    Wrapper_PortfolioDetailComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PortfolioDetailComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PortfolioDetailComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_PortfolioDetailComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PortfolioDetailComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PortfolioDetailComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PortfolioDetailComponent;
}());
export { Wrapper_PortfolioDetailComponent };
var renderType_PortfolioDetailComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_PortfolioDetailComponent_Host0 = (function (_super) {
    __extends(View_PortfolioDetailComponent_Host0, _super);
    function View_PortfolioDetailComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PortfolioDetailComponent_Host0, renderType_PortfolioDetailComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PortfolioDetailComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'portfolio-detail', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PortfolioDetailComponent0(this.viewUtils, this, 0, this._el_0);
        this._PortfolioDetailComponent_0_3 = new Wrapper_PortfolioDetailComponent(this.injectorGet(import8.ActivatedRoute, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex), this.injectorGet(import10.PortfolioService, this.parentIndex));
        this.compView_0.create(this._PortfolioDetailComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._PortfolioDetailComponent_0_3.context);
    };
    View_PortfolioDetailComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PortfolioDetailComponent) && (0 === requestNodeIndex))) {
            return this._PortfolioDetailComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_PortfolioDetailComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PortfolioDetailComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_PortfolioDetailComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_PortfolioDetailComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PortfolioDetailComponent_Host0;
}(import1.AppView));
export var PortfolioDetailComponentNgFactory = new import7.ComponentFactory('portfolio-detail', View_PortfolioDetailComponent_Host0, import0.PortfolioDetailComponent);
var styles_PortfolioDetailComponent = [];
var View_PortfolioDetailComponent1 = (function (_super) {
    __extends(View_PortfolioDetailComponent1, _super);
    function View_PortfolioDetailComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_PortfolioDetailComponent1, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_PortfolioDetailComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-lg-12 text-center'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'h1', new import3.InlineArray2(2, 'class', 'page-header'), null);
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
    View_PortfolioDetailComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PortfolioDetailComponent1;
}(import1.AppView));
var View_PortfolioDetailComponent3 = (function (_super) {
    __extends(View_PortfolioDetailComponent3, _super);
    function View_PortfolioDetailComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_PortfolioDetailComponent3, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import12.UNINITIALIZED;
        return _this;
    }
    View_PortfolioDetailComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray4(4, 'alt', '', 'class', 'img-responsive clickCursor'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return null;
    };
    View_PortfolioDetailComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.parentView.context.getImgSrc(this.parentView.parentView.context.item.imageIndex);
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'src', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_PortfolioDetailComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_PortfolioDetailComponent3.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openGallery(this.parentView.parentView.context.item.imageIndex) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_PortfolioDetailComponent3;
}(import1.AppView));
var View_PortfolioDetailComponent4 = (function (_super) {
    __extends(View_PortfolioDetailComponent4, _super);
    function View_PortfolioDetailComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_PortfolioDetailComponent4, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import12.UNINITIALIZED;
        return _this;
    }
    View_PortfolioDetailComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n          ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-check-square-o'), null);
        this._text_3 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_PortfolioDetailComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, '', this.context.$implicit, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_PortfolioDetailComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PortfolioDetailComponent4;
}(import1.AppView));
var View_PortfolioDetailComponent7 = (function (_super) {
    __extends(View_PortfolioDetailComponent7, _super);
    function View_PortfolioDetailComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_PortfolioDetailComponent7, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import12.UNINITIALIZED;
        return _this;
    }
    View_PortfolioDetailComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-sm-3 col-xs-6'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'alt', '', 'class', 'img-responsive portfolio-item clickCursor'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n      ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_PortfolioDetailComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = this.parentView.parentView.parentView.parentView.context.getImgSrc(this.parentView.context.index);
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.URL, currVal_4));
            this._expr_4 = currVal_4;
        }
    };
    View_PortfolioDetailComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_PortfolioDetailComponent7.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.parentView.context.openGallery(this.parentView.context.index) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_PortfolioDetailComponent7;
}(import1.AppView));
var View_PortfolioDetailComponent6 = (function (_super) {
    __extends(View_PortfolioDetailComponent6, _super);
    function View_PortfolioDetailComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_PortfolioDetailComponent6, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_PortfolioDetailComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createTemplateAnchor(null, null);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(null, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import15.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import14.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this.init(this._text_3, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_PortfolioDetailComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_PortfolioDetailComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = (this.parentView.parentView.parentView.context.item.imageIndex !== this.context.index);
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_PortfolioDetailComponent6.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_PortfolioDetailComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
        cb(this._text_1, ctx);
        cb(this._vc_2.nativeElement, ctx);
        this._vc_2.visitNestedViewRootNodes(cb, ctx);
        cb(this._text_3, ctx);
    };
    View_PortfolioDetailComponent6.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_PortfolioDetailComponent7(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_PortfolioDetailComponent6;
}(import1.AppView));
var View_PortfolioDetailComponent5 = (function (_super) {
    __extends(View_PortfolioDetailComponent5, _super);
    function View_PortfolioDetailComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_PortfolioDetailComponent5, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_PortfolioDetailComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-lg-12'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'h3', new import3.InlineArray2(2, 'class', 'page-header'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Flere billeder', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_8 = new import11.ViewContainer(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import15.TemplateRef_(this, 8, this._anchor_8);
        this._NgFor_8_6 = new import17.Wrapper_NgFor(this._vc_8.vcRef, this._TemplateRef_8_5, this.parentView.parentView.injectorGet(import18.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_9 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._anchor_8,
            this._text_9
        ]), null);
        return null;
    };
    View_PortfolioDetailComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import19.NgFor) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6.context;
        }
        return notFoundResult;
    };
    View_PortfolioDetailComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8_0_0 = this.parentView.parentView.context.item.images;
        this._NgFor_8_6.check_ngForOf(currVal_8_0_0, throwOnChange, false);
        this._NgFor_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
    };
    View_PortfolioDetailComponent5.prototype.destroyInternal = function () {
        this._vc_8.destroyNestedViews();
    };
    View_PortfolioDetailComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_PortfolioDetailComponent5.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 8)) {
            return new View_PortfolioDetailComponent6(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        return null;
    };
    return View_PortfolioDetailComponent5;
}(import1.AppView));
var View_PortfolioDetailComponent9 = (function (_super) {
    __extends(View_PortfolioDetailComponent9, _super);
    function View_PortfolioDetailComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_PortfolioDetailComponent9, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import12.UNINITIALIZED;
        _this._expr_5 = import12.UNINITIALIZED;
        return _this;
    }
    View_PortfolioDetailComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'columnGallery'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'alt', '', 'class', 'demoGallery img-responsive'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n          ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_PortfolioDetailComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = (this.parentView.parentView.parentView.context.currentIndex === this.context.index);
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'active', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.parentView.parentView.parentView.context.getImgSrc(this.context.index);
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.URL, currVal_5));
            this._expr_5 = currVal_5;
        }
    };
    View_PortfolioDetailComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_PortfolioDetailComponent9.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.setCurrentIndex(this.context.index) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_PortfolioDetailComponent9;
}(import1.AppView));
var View_PortfolioDetailComponent8 = (function (_super) {
    __extends(View_PortfolioDetailComponent8, _super);
    function View_PortfolioDetailComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_PortfolioDetailComponent8, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_42 = import12.UNINITIALIZED;
        _this._expr_43 = import12.UNINITIALIZED;
        _this._expr_44 = import12.UNINITIALIZED;
        _this._expr_45 = import12.UNINITIALIZED;
        _this._expr_46 = import12.UNINITIALIZED;
        return _this;
    }
    View_PortfolioDetailComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'portfolioGallery'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'modalGallery'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'closeGallery cursor'), null);
        this._text_5 = this.renderer.createText(this._el_4, '×', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'modalGallery-content noselect'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'mySlidesGallery'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n          ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'img', new import3.InlineArray2(2, 'class', 'img-responsive'), null);
        this._text_13 = this.renderer.createText(this._el_10, '\n        ', null);
        this._text_14 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_15 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_7, 'h4', new import3.InlineArray2(2, 'class', 'text-center noselect'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n          ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'a', new import3.InlineArray2(2, 'class', 'btn btn-default btn-back'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'fa fa-2x fa-arrow-left'), null);
        this._text_21 = this.renderer.createText(this._el_18, '\n          ', null);
        this._text_22 = this.renderer.createText(this._el_16, '\n          ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_16, 'span', new import3.InlineArray2(2, 'class', 'imgNumber'), null);
        this._text_24 = this.renderer.createText(this._el_23, '', null);
        this._text_25 = this.renderer.createText(this._el_16, '\n          ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_16, 'a', new import3.InlineArray2(2, 'class', 'btn btn-default btn-back'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'fa fa-2x fa-arrow-right'), null);
        this._text_29 = this.renderer.createText(this._el_26, '\n          ', null);
        this._text_30 = this.renderer.createText(this._el_16, '\n        ', null);
        this._text_31 = this.renderer.createText(this._el_7, '\n\n        ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'text-center'), null);
        this._text_33 = this.renderer.createText(this._el_32, '\n          ', null);
        this._anchor_34 = this.renderer.createTemplateAnchor(this._el_32, null);
        this._vc_34 = new import11.ViewContainer(34, 32, this, this._anchor_34);
        this._TemplateRef_34_5 = new import15.TemplateRef_(this, 34, this._anchor_34);
        this._NgFor_34_6 = new import17.Wrapper_NgFor(this._vc_34.vcRef, this._TemplateRef_34_5, this.parentView.parentView.injectorGet(import18.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_35 = this.renderer.createText(this._el_32, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_7, '\n      ', null);
        this._text_37 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n  ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_26, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_26));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
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
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._anchor_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._text_38
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_PortfolioDetailComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (34 === requestNodeIndex))) {
            return this._TemplateRef_34_5;
        }
        if (((token === import19.NgFor) && (34 === requestNodeIndex))) {
            return this._NgFor_34_6.context;
        }
        return notFoundResult;
    };
    View_PortfolioDetailComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_34_0_0 = this.parentView.parentView.context.item.images;
        this._NgFor_34_6.check_ngForOf(currVal_34_0_0, throwOnChange, false);
        this._NgFor_34_6.ngDoCheck(this, this._anchor_34, throwOnChange);
        this._vc_34.detectChangesInNestedViews(throwOnChange);
        var currVal_42 = (this.parentView.parentView.context.isOpen ? 'block' : 'none');
        if (import3.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementStyle(this._el_2, 'display', ((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE, currVal_42) == null) ? null : this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE, currVal_42).toString()));
            this._expr_42 = currVal_42;
        }
        var currVal_43 = this.parentView.parentView.context.getImgSrc(this.parentView.parentView.context.currentIndex);
        if (import3.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementProperty(this._el_12, 'src', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.URL, currVal_43));
            this._expr_43 = currVal_43;
        }
        var currVal_44 = ((this.parentView.parentView.context.currentIndex != 0) ? 'visible' : 'hidden');
        if (import3.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementStyle(this._el_18, 'visibility', ((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE, currVal_44) == null) ? null : this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE, currVal_44).toString()));
            this._expr_44 = currVal_44;
        }
        var currVal_45 = import3.inlineInterpolate(2, '', (this.parentView.parentView.context.currentIndex + 1), ' / ', ((this.parentView.parentView.context.item == null) ? null : ((this.parentView.parentView.context.item.images == null) ? null : this.parentView.parentView.context.item.images.length)), '');
        if (import3.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setText(this._text_24, currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_46 = ((this.parentView.parentView.context.currentIndex != (((this.parentView.parentView.context.item == null) ? null : ((this.parentView.parentView.context.item.images == null) ? null : this.parentView.parentView.context.item.images.length)) - 1)) ? 'visible' : 'hidden');
        if (import3.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementStyle(this._el_26, 'visibility', ((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE, currVal_46) == null) ? null : this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE, currVal_46).toString()));
            this._expr_46 = currVal_46;
        }
    };
    View_PortfolioDetailComponent8.prototype.destroyInternal = function () {
        this._vc_34.destroyNestedViews();
    };
    View_PortfolioDetailComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_PortfolioDetailComponent8.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 34)) {
            return new View_PortfolioDetailComponent9(this.viewUtils, this, 34, this._anchor_34, this._vc_34);
        }
        return null;
    };
    View_PortfolioDetailComponent8.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.closeGallery() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_PortfolioDetailComponent8.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.moveSlide(false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_PortfolioDetailComponent8.prototype.handleEvent_26 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.moveSlide(true) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_PortfolioDetailComponent8;
}(import1.AppView));
var View_PortfolioDetailComponent2 = (function (_super) {
    __extends(View_PortfolioDetailComponent2, _super);
    function View_PortfolioDetailComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_PortfolioDetailComponent2, renderType_PortfolioDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_57 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        _this._expr_58 = import12.UNINITIALIZED;
        _this._expr_59 = import12.UNINITIALIZED;
        return _this;
    }
    View_PortfolioDetailComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createTemplateAnchor(null, null);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'col-lg-12'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'h1', new import3.InlineArray2(2, 'class', 'page-header'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'a', new import3.InlineArray2(2, 'class', 'btn btn-default btn-back'), null);
        this._RouterLinkWithHref_8_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import21.LocationStrategy, this.parentIndex));
        this._text_9 = this.renderer.createText(this._el_8, '\n          ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'fa fa-2x fa-arrow-left'), null);
        this._text_11 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_12 = this.renderer.createText(this._el_6, '', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        this._el_16 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n      ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._vc_20 = new import11.ViewContainer(20, 18, this, this._anchor_20);
        this._TemplateRef_20_5 = new import15.TemplateRef_(this, 20, this._anchor_20);
        this._NgIf_20_6 = new import14.Wrapper_NgIf(this._vc_20.vcRef, this._TemplateRef_20_5);
        this._text_21 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_22 = this.renderer.createText(this._el_16, '\n\n    ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'h3', new import3.InlineArray2(2, 'class', 'projectDescHeader'), null);
        this._text_26 = this.renderer.createText(this._el_25, 'Projekt Beskrivelse', null);
        this._text_27 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_23, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_23, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_31 = this.renderer.createText(this._el_30, 'Projekt Teknologier', null);
        this._text_32 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_23, 'ul', new import3.InlineArray2(2, 'class', 'fa-ul'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n        ', null);
        this._anchor_35 = this.renderer.createTemplateAnchor(this._el_33, null);
        this._vc_35 = new import11.ViewContainer(35, 33, this, this._anchor_35);
        this._TemplateRef_35_5 = new import15.TemplateRef_(this, 35, this._anchor_35);
        this._NgFor_35_6 = new import17.Wrapper_NgFor(this._vc_35.vcRef, this._TemplateRef_35_5, this.parentView.injectorGet(import18.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_36 = this.renderer.createText(this._el_33, '\n      ', null);
        this._text_37 = this.renderer.createText(this._el_23, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_16, '\n  ', null);
        this._text_39 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_40 = this.renderer.createTemplateAnchor(null, null);
        this._vc_40 = new import11.ViewContainer(40, 0, this, this._anchor_40);
        this._TemplateRef_40_5 = new import15.TemplateRef_(this, 40, this._anchor_40);
        this._NgIf_40_6 = new import14.Wrapper_NgIf(this._vc_40.vcRef, this._TemplateRef_40_5);
        this._text_41 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_42 = this.renderer.createTemplateAnchor(null, null);
        this._vc_42 = new import11.ViewContainer(42, 0, this, this._anchor_42);
        this._TemplateRef_42_5 = new import15.TemplateRef_(this, 42, this._anchor_42);
        this._NgIf_42_6 = new import14.Wrapper_NgIf(this._vc_42.vcRef, this._TemplateRef_42_5);
        this._text_43 = this.renderer.createText(null, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
        this.init(this._text_43, (this.renderer.directRenderer ? null : [
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
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._anchor_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._anchor_40,
            this._text_41,
            this._anchor_42,
            this._text_43
        ]), [disposable_0]);
        return null;
    };
    View_PortfolioDetailComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._RouterLinkWithHref_8_3.context;
        }
        if (((token === import15.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import16.NgIf) && (20 === requestNodeIndex))) {
            return this._NgIf_20_6.context;
        }
        if (((token === import15.TemplateRef) && (35 === requestNodeIndex))) {
            return this._TemplateRef_35_5;
        }
        if (((token === import19.NgFor) && (35 === requestNodeIndex))) {
            return this._NgFor_35_6.context;
        }
        if (((token === import15.TemplateRef) && (40 === requestNodeIndex))) {
            return this._TemplateRef_40_5;
        }
        if (((token === import16.NgIf) && (40 === requestNodeIndex))) {
            return this._NgIf_40_6.context;
        }
        if (((token === import15.TemplateRef) && (42 === requestNodeIndex))) {
            return this._TemplateRef_42_5;
        }
        if (((token === import16.NgIf) && (42 === requestNodeIndex))) {
            return this._NgIf_42_6.context;
        }
        return notFoundResult;
    };
    View_PortfolioDetailComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8_0_0 = this._arr_57('/portfolio');
        this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0, throwOnChange, false);
        this._RouterLinkWithHref_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_20_0_0 = this.parentView.context.isImgNotNull(this.parentView.context.item.imageIndex);
        this._NgIf_20_6.check_ngIf(currVal_20_0_0, throwOnChange, false);
        this._NgIf_20_6.ngDoCheck(this, this._anchor_20, throwOnChange);
        var currVal_35_0_0 = this.parentView.context.item.tags;
        this._NgFor_35_6.check_ngForOf(currVal_35_0_0, throwOnChange, false);
        this._NgFor_35_6.ngDoCheck(this, this._anchor_35, throwOnChange);
        var currVal_40_0_0 = this.parentView.context.showMoreImages();
        this._NgIf_40_6.check_ngIf(currVal_40_0_0, throwOnChange, false);
        this._NgIf_40_6.ngDoCheck(this, this._anchor_40, throwOnChange);
        var currVal_42_0_0 = (this.parentView.context.item.images != null);
        this._NgIf_42_6.check_ngIf(currVal_42_0_0, throwOnChange, false);
        this._NgIf_42_6.ngDoCheck(this, this._anchor_42, throwOnChange);
        this._vc_20.detectChangesInNestedViews(throwOnChange);
        this._vc_35.detectChangesInNestedViews(throwOnChange);
        this._vc_40.detectChangesInNestedViews(throwOnChange);
        this._vc_42.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_8_3.checkHost(this, this, this._el_8, throwOnChange);
        var currVal_58 = import3.inlineInterpolate(1, ' ', ((this.parentView.context.item == null) ? null : this.parentView.context.item.title), '\n      ');
        if (import3.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this.renderer.setText(this._text_12, currVal_58);
            this._expr_58 = currVal_58;
        }
        var currVal_59 = this.parentView.context.item.description;
        if (import3.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this.renderer.setElementProperty(this._el_28, 'innerHTML', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.HTML, currVal_59));
            this._expr_59 = currVal_59;
        }
    };
    View_PortfolioDetailComponent2.prototype.destroyInternal = function () {
        this._vc_20.destroyNestedViews();
        this._vc_35.destroyNestedViews();
        this._vc_40.destroyNestedViews();
        this._vc_42.destroyNestedViews();
        this._RouterLinkWithHref_8_3.ngOnDestroy();
    };
    View_PortfolioDetailComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
        cb(this._text_1, ctx);
        cb(this._el_2, ctx);
        cb(this._text_15, ctx);
        cb(this._el_16, ctx);
        cb(this._text_39, ctx);
        cb(this._vc_40.nativeElement, ctx);
        this._vc_40.visitNestedViewRootNodes(cb, ctx);
        cb(this._text_41, ctx);
        cb(this._vc_42.nativeElement, ctx);
        this._vc_42.visitNestedViewRootNodes(cb, ctx);
        cb(this._text_43, ctx);
    };
    View_PortfolioDetailComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 20)) {
            return new View_PortfolioDetailComponent3(this.viewUtils, this, 20, this._anchor_20, this._vc_20);
        }
        if ((nodeIndex == 35)) {
            return new View_PortfolioDetailComponent4(this.viewUtils, this, 35, this._anchor_35, this._vc_35);
        }
        if ((nodeIndex == 40)) {
            return new View_PortfolioDetailComponent5(this.viewUtils, this, 40, this._anchor_40, this._vc_40);
        }
        if ((nodeIndex == 42)) {
            return new View_PortfolioDetailComponent8(this.viewUtils, this, 42, this._anchor_42, this._vc_42);
        }
        return null;
    };
    View_PortfolioDetailComponent2.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_8_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_PortfolioDetailComponent2;
}(import1.AppView));
var renderType_PortfolioDetailComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_PortfolioDetailComponent, {});
var View_PortfolioDetailComponent0 = (function (_super) {
    __extends(View_PortfolioDetailComponent0, _super);
    function View_PortfolioDetailComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PortfolioDetailComponent0, renderType_PortfolioDetailComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PortfolioDetailComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import11.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import15.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import14.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_2 = new import11.ViewContainer(2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new import15.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import14.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1,
            this._anchor_2
        ]), null);
        return null;
    };
    View_PortfolioDetailComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import16.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_PortfolioDetailComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.showLoader;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        var currVal_2_0_0 = !this.context.showLoader;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_PortfolioDetailComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_2.destroyNestedViews();
    };
    View_PortfolioDetailComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_PortfolioDetailComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        if ((nodeIndex == 2)) {
            return new View_PortfolioDetailComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_PortfolioDetailComponent0;
}(import1.AppView));
export { View_PortfolioDetailComponent0 };
