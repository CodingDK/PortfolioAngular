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
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../ClientApp/app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '../../../ClientApp/app/portfolio/portfolio-routing.module';
import * as import8 from '../../../ClientApp/app/portfolio/portfolio.module';
import * as import9 from '../../../ClientApp/app/app-routing.module';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/animation/animation_queue';
import * as import21 from '@angular/core/src/linker/view_utils';
import * as import22 from '@angular/platform-browser/src/browser/title';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '../../../ClientApp/app/portfolio/shared/portfolio.service';
import * as import28 from '@angular/common/src/location/location';
import * as import29 from '@angular/router/src/url_tree';
import * as import30 from '@angular/router/src/router_outlet_map';
import * as import31 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import32 from '@angular/router/src/router_preloader';
import * as import34 from './portfolio/portfolio.component.ngfactory';
import * as import35 from './portfolio/portfolio-detail/portfolio-detail.component.ngfactory';
import * as import36 from './app.component.ngfactory';
import * as import37 from '@angular/core/src/i18n/tokens';
import * as import38 from '@angular/core/src/application_tokens';
import * as import39 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import40 from '@angular/platform-browser/src/dom/events/key_events';
import * as import41 from '@angular/core/src/zone/ng_zone';
import * as import42 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import43 from '../../../ClientApp/app/portfolio/portfolio.component';
import * as import44 from '../../../ClientApp/app/portfolio/portfolio-detail/portfolio-detail.component';
import * as import45 from '@angular/common/src/location/platform_location';
import * as import46 from '@angular/common/src/location/location_strategy';
import * as import47 from '@angular/router/src/url_handling_strategy';
import * as import48 from '@angular/router/src/route_reuse_strategy';
import * as import49 from '@angular/router/src/router';
import * as import50 from '@angular/core/src/console';
import * as import51 from '@angular/core/src/error_handler';
import * as import52 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import53 from '@angular/platform-browser/src/dom/animation_driver';
import * as import54 from '@angular/core/src/render/api';
import * as import55 from '@angular/core/src/security';
import * as import56 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import57 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import58 from '@angular/http/src/interfaces';
import * as import59 from '@angular/http/src/http';
import * as import60 from '@angular/router/src/router_config_loader';
import * as import61 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import62 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import34.PortfolioComponentNgFactory,
            import35.PortfolioDetailComponentNgFactory,
            import36.AppComponentNgFactory
        ], [import36.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_10", {
        get: function () {
            if ((this.__LOCALE_ID_10 == null)) {
                (this.__LOCALE_ID_10 = import3._localeFactory(this.parent.get(import37.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_11", {
        get: function () {
            if ((this.__NgLocalization_11 == null)) {
                (this.__NgLocalization_11 = new import10.NgLocaleLocalization(this._LOCALE_ID_10));
            }
            return this.__NgLocalization_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_18", {
        get: function () {
            if ((this.__ApplicationRef_18 == null)) {
                (this.__ApplicationRef_18 = this._ApplicationRef__17);
            }
            return this.__ApplicationRef_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_19", {
        get: function () {
            if ((this.__Compiler_19 == null)) {
                (this.__Compiler_19 = new import14.Compiler());
            }
            return this.__Compiler_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_20", {
        get: function () {
            if ((this.__APP_ID_20 == null)) {
                (this.__APP_ID_20 = import38._appIdRandomProviderFactory());
            }
            return this.__APP_ID_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_21", {
        get: function () {
            if ((this.__DOCUMENT_21 == null)) {
                (this.__DOCUMENT_21 = import4._document());
            }
            return this.__DOCUMENT_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_22", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_22 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_22 = new import15.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_23", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_23 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_23 = [
                    new import39.DomEventsPlugin(),
                    new import40.KeyEventsPlugin(),
                    new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_22)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_24", {
        get: function () {
            if ((this.__EventManager_24 == null)) {
                (this.__EventManager_24 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_23, this.parent.get(import41.NgZone)));
            }
            return this.__EventManager_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_26", {
        get: function () {
            if ((this.__AnimationDriver_26 == null)) {
                (this.__AnimationDriver_26 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_27", {
        get: function () {
            if ((this.__DomRootRenderer_27 == null)) {
                (this.__DomRootRenderer_27 = new import18.DomRootRenderer_(this._DOCUMENT_21, this._EventManager_24, this._DomSharedStylesHost_25, this._AnimationDriver_26, this._APP_ID_20));
            }
            return this.__DomRootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_28", {
        get: function () {
            if ((this.__NgProbeToken_28 == null)) {
                (this.__NgProbeToken_28 = [import6.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_29", {
        get: function () {
            if ((this.__RootRenderer_29 == null)) {
                (this.__RootRenderer_29 = import42._createConditionalRootRenderer(this._DomRootRenderer_27, this.parent.get(import42.NgProbeToken, null), this._NgProbeToken_28));
            }
            return this.__RootRenderer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_30", {
        get: function () {
            if ((this.__DomSanitizer_30 == null)) {
                (this.__DomSanitizer_30 = new import19.DomSanitizerImpl());
            }
            return this.__DomSanitizer_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_31", {
        get: function () {
            if ((this.__Sanitizer_31 == null)) {
                (this.__Sanitizer_31 = this._DomSanitizer_30);
            }
            return this.__Sanitizer_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_32", {
        get: function () {
            if ((this.__AnimationQueue_32 == null)) {
                (this.__AnimationQueue_32 = new import20.AnimationQueue(this.parent.get(import41.NgZone)));
            }
            return this.__AnimationQueue_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_33", {
        get: function () {
            if ((this.__ViewUtils_33 == null)) {
                (this.__ViewUtils_33 = new import21.ViewUtils(this._RootRenderer_29, this._Sanitizer_31, this._AnimationQueue_32));
            }
            return this.__ViewUtils_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_34", {
        get: function () {
            if ((this.__IterableDiffers_34 == null)) {
                (this.__IterableDiffers_34 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_35", {
        get: function () {
            if ((this.__KeyValueDiffers_35 == null)) {
                (this.__KeyValueDiffers_35 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_36", {
        get: function () {
            if ((this.__SharedStylesHost_36 == null)) {
                (this.__SharedStylesHost_36 = this._DomSharedStylesHost_25);
            }
            return this.__SharedStylesHost_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_37", {
        get: function () {
            if ((this.__Title_37 == null)) {
                (this.__Title_37 = new import22.Title());
            }
            return this.__Title_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_38", {
        get: function () {
            if ((this.__BrowserXhr_38 == null)) {
                (this.__BrowserXhr_38 = new import23.BrowserXhr());
            }
            return this.__BrowserXhr_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_39", {
        get: function () {
            if ((this.__ResponseOptions_39 == null)) {
                (this.__ResponseOptions_39 = new import24.BaseResponseOptions());
            }
            return this.__ResponseOptions_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_40", {
        get: function () {
            if ((this.__XSRFStrategy_40 == null)) {
                (this.__XSRFStrategy_40 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_41", {
        get: function () {
            if ((this.__XHRBackend_41 == null)) {
                (this.__XHRBackend_41 = new import25.XHRBackend(this._BrowserXhr_38, this._ResponseOptions_39, this._XSRFStrategy_40));
            }
            return this.__XHRBackend_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_42", {
        get: function () {
            if ((this.__RequestOptions_42 == null)) {
                (this.__RequestOptions_42 = new import26.BaseRequestOptions());
            }
            return this.__RequestOptions_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_43", {
        get: function () {
            if ((this.__Http_43 == null)) {
                (this.__Http_43 = import5.httpFactory(this._XHRBackend_41, this._RequestOptions_42));
            }
            return this.__Http_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_44", {
        get: function () {
            if ((this.__ROUTES_44 == null)) {
                (this.__ROUTES_44 = [
                    [
                        {
                            path: 'portfolio',
                            component: import43.PortfolioComponent
                        },
                        {
                            path: 'portfolio/:slug',
                            component: import44.PortfolioDetailComponent
                        }
                    ],
                    [{
                            path: '**',
                            redirectTo: 'portfolio'
                        }
                    ]
                ]);
            }
            return this.__ROUTES_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PortfolioService_45", {
        get: function () {
            if ((this.__PortfolioService_45 == null)) {
                (this.__PortfolioService_45 = new import27.PortfolioService(this._Http_43));
            }
            return this.__PortfolioService_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_46", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_46 == null)) {
                (this.__ROUTER_CONFIGURATION_46 = {});
            }
            return this.__ROUTER_CONFIGURATION_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_47", {
        get: function () {
            if ((this.__LocationStrategy_47 == null)) {
                (this.__LocationStrategy_47 = import6.provideLocationStrategy(this.parent.get(import45.PlatformLocation), this.parent.get(import46.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_46));
            }
            return this.__LocationStrategy_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_48", {
        get: function () {
            if ((this.__Location_48 == null)) {
                (this.__Location_48 = new import28.Location(this._LocationStrategy_47));
            }
            return this.__Location_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_49", {
        get: function () {
            if ((this.__UrlSerializer_49 == null)) {
                (this.__UrlSerializer_49 = new import29.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_50", {
        get: function () {
            if ((this.__RouterOutletMap_50 == null)) {
                (this.__RouterOutletMap_50 = new import30.RouterOutletMap());
            }
            return this.__RouterOutletMap_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_51", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_51 == null)) {
                (this.__NgModuleFactoryLoader_51 = new import31.SystemJsNgModuleLoader(this._Compiler_19, this.parent.get(import31.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_52", {
        get: function () {
            if ((this.__Router_52 == null)) {
                (this.__Router_52 = import6.setupRouter(this._ApplicationRef_18, this._UrlSerializer_49, this._RouterOutletMap_50, this._Location_48, this, this._NgModuleFactoryLoader_51, this._Compiler_19, this._ROUTES_44, this._ROUTER_CONFIGURATION_46, this.parent.get(import47.UrlHandlingStrategy, null), this.parent.get(import48.RouteReuseStrategy, null)));
            }
            return this.__Router_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_53", {
        get: function () {
            if ((this.__ActivatedRoute_53 == null)) {
                (this.__ActivatedRoute_53 = import6.rootRoute(this._Router_52));
            }
            return this.__ActivatedRoute_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_57", {
        get: function () {
            if ((this.__PreloadAllModules_57 == null)) {
                (this.__PreloadAllModules_57 = new import32.PreloadAllModules());
            }
            return this.__PreloadAllModules_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_58", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_58 == null)) {
                (this.__ROUTER_INITIALIZER_58 = import6.getBootstrapListener(this._RouterInitializer_13));
            }
            return this.__ROUTER_INITIALIZER_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_59", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_59 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_59 = [this._ROUTER_INITIALIZER_58]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_59;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import49.Router, null));
        this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
        this._PortfolioRoutingModule_6 = new import7.PortfolioRoutingModule();
        this._PortfolioModule_7 = new import8.PortfolioModule();
        this._AppRoutingModule_8 = new import9.AppRoutingModule();
        this._AppModule_9 = new import1.AppModule();
        this._ErrorHandler_12 = import4.errorHandler();
        this._RouterInitializer_13 = new import6.RouterInitializer(this);
        this._APP_INITIALIZER_14 = [import6.getAppInitializer(this._RouterInitializer_13)];
        this._ApplicationInitStatus_15 = new import11.ApplicationInitStatus(this._APP_INITIALIZER_14);
        this._Testability_16 = new import12.Testability(this.parent.get(import41.NgZone));
        this._ApplicationRef__17 = new import13.ApplicationRef_(this.parent.get(import41.NgZone), this.parent.get(import50.Console), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_15, this.parent.get(import12.TestabilityRegistry, null), this._Testability_16);
        this._DomSharedStylesHost_25 = new import17.DomSharedStylesHost(this._DOCUMENT_21);
        this._NoPreloading_54 = new import32.NoPreloading();
        this._PreloadingStrategy_55 = this._NoPreloading_54;
        this._RouterPreloader_56 = new import32.RouterPreloader(this._Router_52, this._NgModuleFactoryLoader_51, this._Compiler_19, this, this._PreloadingStrategy_55);
        return this._AppModule_9;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_4;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import7.PortfolioRoutingModule)) {
            return this._PortfolioRoutingModule_6;
        }
        if ((token === import8.PortfolioModule)) {
            return this._PortfolioModule_7;
        }
        if ((token === import9.AppRoutingModule)) {
            return this._AppRoutingModule_8;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_9;
        }
        if ((token === import37.LOCALE_ID)) {
            return this._LOCALE_ID_10;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_11;
        }
        if ((token === import51.ErrorHandler)) {
            return this._ErrorHandler_12;
        }
        if ((token === import6.RouterInitializer)) {
            return this._RouterInitializer_13;
        }
        if ((token === import11.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_14;
        }
        if ((token === import11.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_15;
        }
        if ((token === import12.Testability)) {
            return this._Testability_16;
        }
        if ((token === import13.ApplicationRef_)) {
            return this._ApplicationRef__17;
        }
        if ((token === import13.ApplicationRef)) {
            return this._ApplicationRef_18;
        }
        if ((token === import14.Compiler)) {
            return this._Compiler_19;
        }
        if ((token === import38.APP_ID)) {
            return this._APP_ID_20;
        }
        if ((token === import52.DOCUMENT)) {
            return this._DOCUMENT_21;
        }
        if ((token === import15.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_22;
        }
        if ((token === import16.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_23;
        }
        if ((token === import16.EventManager)) {
            return this._EventManager_24;
        }
        if ((token === import17.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_25;
        }
        if ((token === import53.AnimationDriver)) {
            return this._AnimationDriver_26;
        }
        if ((token === import18.DomRootRenderer)) {
            return this._DomRootRenderer_27;
        }
        if ((token === import13.NgProbeToken)) {
            return this._NgProbeToken_28;
        }
        if ((token === import54.RootRenderer)) {
            return this._RootRenderer_29;
        }
        if ((token === import19.DomSanitizer)) {
            return this._DomSanitizer_30;
        }
        if ((token === import55.Sanitizer)) {
            return this._Sanitizer_31;
        }
        if ((token === import20.AnimationQueue)) {
            return this._AnimationQueue_32;
        }
        if ((token === import21.ViewUtils)) {
            return this._ViewUtils_33;
        }
        if ((token === import56.IterableDiffers)) {
            return this._IterableDiffers_34;
        }
        if ((token === import57.KeyValueDiffers)) {
            return this._KeyValueDiffers_35;
        }
        if ((token === import17.SharedStylesHost)) {
            return this._SharedStylesHost_36;
        }
        if ((token === import22.Title)) {
            return this._Title_37;
        }
        if ((token === import23.BrowserXhr)) {
            return this._BrowserXhr_38;
        }
        if ((token === import24.ResponseOptions)) {
            return this._ResponseOptions_39;
        }
        if ((token === import58.XSRFStrategy)) {
            return this._XSRFStrategy_40;
        }
        if ((token === import25.XHRBackend)) {
            return this._XHRBackend_41;
        }
        if ((token === import26.RequestOptions)) {
            return this._RequestOptions_42;
        }
        if ((token === import59.Http)) {
            return this._Http_43;
        }
        if ((token === import60.ROUTES)) {
            return this._ROUTES_44;
        }
        if ((token === import27.PortfolioService)) {
            return this._PortfolioService_45;
        }
        if ((token === import6.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_46;
        }
        if ((token === import46.LocationStrategy)) {
            return this._LocationStrategy_47;
        }
        if ((token === import28.Location)) {
            return this._Location_48;
        }
        if ((token === import29.UrlSerializer)) {
            return this._UrlSerializer_49;
        }
        if ((token === import30.RouterOutletMap)) {
            return this._RouterOutletMap_50;
        }
        if ((token === import61.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_51;
        }
        if ((token === import49.Router)) {
            return this._Router_52;
        }
        if ((token === import62.ActivatedRoute)) {
            return this._ActivatedRoute_53;
        }
        if ((token === import32.NoPreloading)) {
            return this._NoPreloading_54;
        }
        if ((token === import32.PreloadingStrategy)) {
            return this._PreloadingStrategy_55;
        }
        if ((token === import32.RouterPreloader)) {
            return this._RouterPreloader_56;
        }
        if ((token === import32.PreloadAllModules)) {
            return this._PreloadAllModules_57;
        }
        if ((token === import6.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_58;
        }
        if ((token === import38.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_59;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__17.ngOnDestroy();
        this._DomSharedStylesHost_25.ngOnDestroy();
        this._RouterPreloader_56.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
