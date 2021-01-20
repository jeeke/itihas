import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogsCommentPageRoutingModule } from './blogs-comment-routing.module';

import { BlogsCommentPage } from './blogs-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsCommentPageRoutingModule
  ],
  declarations: [BlogsCommentPage]
})
export class BlogsCommentPageModule {}
