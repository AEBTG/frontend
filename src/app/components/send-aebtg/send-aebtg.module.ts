import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SendAebtgComponent } from './send-aebtg.component';

@NgModule({
  declarations: [ SendAebtgComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ SendAebtgComponent ]
})

export class SendAebtgModule { }
