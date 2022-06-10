import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualyPage } from './actualy.page';

const routes: Routes = [
  {
    path: '',
    component: ActualyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualyPageRoutingModule {}
