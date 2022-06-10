import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualyPageRoutingModule } from './actualy-routing.module';

import { ActualyPage } from './actualy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualyPageRoutingModule
  ],
  declarations: [ActualyPage]
})
export class ActualyPageModule {}
