import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsDetailsPage } from './blogs-details.page';

const routes: Routes = [
  {
    path: '',
    component: BlogsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsDetailsPageRoutingModule {}
