import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConvertToBtgComponent } from './convert-to-btg.component';

@NgModule({
  declarations: [ ConvertToBtgComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ConvertToBtgComponent
  ]
})

export class ConvertToBtgModule { }
