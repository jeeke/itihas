import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogsDetailsPageRoutingModule } from './blogs-details-routing.module';

import { BlogsDetailsPage } from './blogs-details.page';
import { CsPipePipe } from '../pipes/cs-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsDetailsPageRoutingModule
  ],
  declarations: [BlogsDetailsPage,CsPipePipe]
})
export class BlogsDetailsPageModule {}
