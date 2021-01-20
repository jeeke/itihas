import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogsCreatePageRoutingModule } from './blogs-create-routing.module';

import { BlogsCreatePage } from './blogs-create.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';   
import {IonTagsInputModule} from "ionic-tags-input";    




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsCreatePageRoutingModule,
    CKEditorModule,
    IonTagsInputModule,
    
    ],
  declarations: [BlogsCreatePage]
})
export class BlogsCreatePageModule {}
