import { CommunicationsShellComponent } from './containers/communications-shell/communications-shell.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  {
  path: 'inputout',
  pathMatch: 'full',
  component: CommunicationsShellComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationsRoutingModule { }
