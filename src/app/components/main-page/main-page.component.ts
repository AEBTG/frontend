import { Component, OnInit } from '@angular/core';

import { AeWalletService } from './../../services/wallet/ae-wallet.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private aeWalletService: AeWalletService
  ) { }

  public myAddress: string;

  ngOnInit(): void {
    this.aeWalletService.connect().then( (val) => {
      if (val) {
        this.myAddress = this.aeWalletService.getAddress();
      }
    });
  }

}
