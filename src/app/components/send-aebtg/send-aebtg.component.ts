import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AppState } from './../../entities/app-state.enum';

@Component({
  selector: 'app-send-aebtg',
  templateUrl: './send-aebtg.component.html',
  styleUrls: ['./send-aebtg.component.css']
})
export class SendAebtgComponent implements OnInit {

  @Output() changeStateCallback = new EventEmitter<AppState>();

  constructor() { }

  ngOnInit(): void {
  }

}
