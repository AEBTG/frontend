import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MyAccountModule } from './../my-account/my-account.module';
import { SendAebtgModule } from './../send-aebtg/send-aebtg.module';
import { ConvertToAebtgModule } from './../convert-to-aebtg/convert-to-aebtg.module';
import { ConvertToBtgModule } from './../convert-to-btg/convert-to-btg.module';

import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [ MainPageComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    MyAccountModule,
    SendAebtgModule,
    ConvertToAebtgModule,
    ConvertToBtgModule
  ],
  exports: [ MainPageComponent ]
})

export class MainPageModule { }
