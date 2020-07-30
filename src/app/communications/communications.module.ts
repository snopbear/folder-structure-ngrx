import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationsRoutingModule } from './communications-routing.module';
import { CommunicationsShellComponent } from './containers/communications-shell/communications-shell.component';
import { CommunicationsListComponent } from './components/communications-list/communications-list.component';
import { CommunicationsSearchComponent } from './components/communications-search/communications-search.component';

@NgModule({
  declarations: [
    CommunicationsShellComponent,
    CommunicationsListComponent,
    CommunicationsSearchComponent,
  ],
  imports: [CommonModule, CommunicationsRoutingModule, SharedModule]
})
export class CommunicationsModule {}
