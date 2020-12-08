import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AeWalletService } from './../../services/wallet/ae-wallet.service';

import { AppState } from './../../entities/app-state.enum';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  @Input() myAddress: string;
  @Output() changeStateCallback = new EventEmitter<AppState>();

  constructor(
    public aeWalletService: AeWalletService
  ) { }

  public stateEnum = AppState;

  ngOnInit(): void {
  }

  public navigateTo(state: AppState): void {
    this.changeStateCallback.next(state);
  }

}
