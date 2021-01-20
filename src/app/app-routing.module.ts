import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'booklist',
    loadChildren: () => import('./booklist/booklist.module').then( m => m.BooklistPageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs-list/blogs-list.module').then( m => m.BlogsListPageModule)
  },
  {
    path: 'blogdetails/:title',
    loadChildren: () => import('./blogs-details/blogs-details.module').then( m => m.BlogsDetailsPageModule)
  },
  {
    path: 'blogs-create',
    loadChildren: () => import('./blogs-create/blogs-create.module').then( m => m.BlogsCreatePageModule)
  },
  {
    path: 'blogs-comment',
    loadChildren: () => import('./blogs-comment/blogs-comment.module').then( m => m.BlogsCommentPageModule)
  },
  {
    path: 'courselist',
    loadChildren: () => import('./courselist/courselist.module').then( m => m.CourselistPageModule)
  },
  {
    path: 'free-video',
    loadChildren: () => import('./free-video/free-video.module').then( m => m.FreeVideoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
