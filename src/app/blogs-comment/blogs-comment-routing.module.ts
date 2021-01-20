import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsCommentPage } from './blogs-comment.page';

const routes: Routes = [
  {
    path: '',
    component: BlogsCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsCommentPageRoutingModule {}
