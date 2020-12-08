import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MyAccountComponent } from './my-account.component';

@NgModule({
  declarations: [ MyAccountComponent ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ MyAccountComponent ]
})

export class MyAccountModule { }
