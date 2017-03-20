/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../../ClientApp/app/portfolio/portfolio-routing.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/core/src/di/injector';
import * as import4 from './portfolio.component.ngfactory';
import * as import5 from './portfolio-detail/portfolio-detail.component.ngfactory';
import * as import6 from '../../../../ClientApp/app/portfolio/portfolio.component';
import * as import7 from '../../../../ClientApp/app/portfolio/portfolio-detail/portfolio-detail.component';
import * as import8 from '@angular/router/src/router_config_loader';
class PortfolioRoutingModuleInjector extends import0.NgModuleInjector<import1.PortfolioRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _PortfolioRoutingModule_1:import1.PortfolioRoutingModule;
  __ROUTES_2:any[];
  constructor(parent:import3.Injector) {
    super(parent,[
      import4.PortfolioComponentNgFactory,
      import5.PortfolioDetailComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ROUTES_2():any[] {
      if ((this.__ROUTES_2 == null)) { (this.__ROUTES_2 = [[
        {
          path: 'portfolio',
          component: import6.PortfolioComponent
        }
        ,
        {
          path: 'portfolio/:slug',
          component: import7.PortfolioDetailComponent
        }

      ]
    ]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.PortfolioRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD,(null as any)));
    this._PortfolioRoutingModule_1 = new import1.PortfolioRoutingModule();
    return this._PortfolioRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.PortfolioRoutingModule)) { return this._PortfolioRoutingModule_1; }
    if ((token === import8.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const PortfolioRoutingModuleNgFactory:import0.NgModuleFactory<import1.PortfolioRoutingModule> = new import0.NgModuleFactory(PortfolioRoutingModuleInjector,import1.PortfolioRoutingModule);