import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnbikoPage } from './anbiko.page';

const routes: Routes = [
  {
    path: '',
    component: AnbikoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnbikoPageRoutingModule {}
