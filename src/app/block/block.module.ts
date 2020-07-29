import { HeaderComponent } from './header/header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { AppComponent } from './root/app.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HeaderComponent, AppComponent],
  imports: [
    CommonModule,
    BlockRoutingModule,SharedModule
  ],
  exports: [HeaderComponent, AppComponent]
})
export class BlockModule { }
