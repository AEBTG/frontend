import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MyAccountModule } from '../my-account/my-account.module';

import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [ MainPageComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    MyAccountModule
  ],
  exports: [ MainPageComponent ]
})

export class MainPageModule { }
