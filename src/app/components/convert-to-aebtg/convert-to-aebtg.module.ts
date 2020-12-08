import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConvertToAebtgComponent } from './convert-to-aebtg.component';

@NgModule({
  declarations: [ConvertToAebtgComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ConvertToAebtgComponent
  ]
})

export class ConvertToAebtgModule { }
