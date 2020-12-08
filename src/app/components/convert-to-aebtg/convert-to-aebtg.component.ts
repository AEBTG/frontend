import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RequestsService } from './../../services/http/requests.service';

import { AppState } from './../../entities/app-state.enum';

@Component({
  selector: 'app-convert-to-aebtg',
  templateUrl: './convert-to-aebtg.component.html',
  styleUrls: ['./convert-to-aebtg.component.css']
})
export class ConvertToAebtgComponent implements OnInit {

  @Input() myAddress: string;
  @Output() changeStateCallback = new EventEmitter<AppState>();

  constructor(
    private requestService: RequestsService
  ) {
    this.getAebtgAddress();
  }

  public stateEnum = AppState;
  public aebtgAddress: string;

  ngOnInit(): void {
  }

  public navigateTo(state: AppState): void {
    this.changeStateCallback.next(state);
  }

  private getAebtgAddress(): void {
    this.requestService.getAebtgAddress(this.myAddress).subscribe(
      (response) => {
        this.aebtgAddress = response.data.order.receiveAddress;
        console.log(response.data);
      }
    );
  }

}
