import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeVideoPageRoutingModule } from './free-video-routing.module';

import { FreeVideoPage } from './free-video.page';
import { PlyrModule } from 'ngx-plyr';

@NgModule({              
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeVideoPageRoutingModule,
    PlyrModule
  ],
  declarations: [FreeVideoPage]
})
export class FreeVideoPageModule {}
