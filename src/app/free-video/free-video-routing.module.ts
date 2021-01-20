import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeVideoPage } from './free-video.page';

const routes: Routes = [
  {
    path: '',
    component: FreeVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeVideoPageRoutingModule {}
