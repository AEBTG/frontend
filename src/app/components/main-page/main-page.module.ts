import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [ MainPageComponent ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ MainPageComponent ]
})

export class MainPageModule { }
