import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AppState } from './../../entities/app-state.enum';

@Component({
  selector: 'app-convert-to-aebtg',
  templateUrl: './convert-to-aebtg.component.html',
  styleUrls: ['./convert-to-aebtg.component.css']
})
export class ConvertToAebtgComponent implements OnInit {

  @Output() changeStateCallback = new EventEmitter<AppState>();

  constructor() { }

  ngOnInit(): void {
  }

}
