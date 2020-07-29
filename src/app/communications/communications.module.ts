import { InputOutComponent } from './input-out/input-out.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationsRoutingModule } from './communications-routing.module';


@NgModule({
  declarations: [
    InputOutComponent
  ],
  imports: [
    CommonModule,
    CommunicationsRoutingModule
  ]
})
export class CommunicationsModule { }
