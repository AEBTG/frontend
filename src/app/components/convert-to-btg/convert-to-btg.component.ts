import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AppState } from './../../entities/app-state.enum';

@Component({
  selector: 'app-convert-to-btg',
  templateUrl: './convert-to-btg.component.html',
  styleUrls: ['./convert-to-btg.component.css']
})
export class ConvertToBtgComponent implements OnInit {

  @Output() changeStateCallback = new EventEmitter<AppState>();

  constructor() { }

  ngOnInit(): void {
  }

}
