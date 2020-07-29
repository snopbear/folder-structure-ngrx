import { SharedModule } from './../shared/shared.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { throwIfAlreadyLoaded } from './utils/module-import-guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers:[
    // interseptors
  ]
})
export class CoreModule {

  /*
  @SkipSelf()
  A parameter decorator to be used on constructor parameters which tells the 
  DI framework to start dependency resolution from the parent injector.
  Rwsolution works upward through , the injector hierarchy , so the local injector is not checked for a provider
  */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
