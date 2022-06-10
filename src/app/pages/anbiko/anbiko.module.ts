import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnbikoPageRoutingModule } from './anbiko-routing.module';

import { AnbikoPage } from './anbiko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnbikoPageRoutingModule
  ],
  declarations: [AnbikoPage]
})
export class AnbikoPageModule {}
