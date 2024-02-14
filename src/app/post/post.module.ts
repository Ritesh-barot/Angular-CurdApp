import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
   
  
  ],
  
})
export class PostModule { }
