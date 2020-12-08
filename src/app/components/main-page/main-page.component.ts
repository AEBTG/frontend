import { AfterViewInit, Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

import { AeWalletService } from './../../services/wallet/ae-wallet.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit, AfterViewInit {

  constructor(
    public aeWalletService: AeWalletService
  ) { }

  public myAddress: string;

  private balanceUpdateInterval: Observable<number>;

  ngOnInit(): void {
    this.aeWalletService.connect().then( (val) => {
      if (val) {
        this.myAddress = this.aeWalletService.getAddress();
        this.aeWalletService.updateBalance();
      }
    });
  }

  ngAfterViewInit(): void {
    this.balanceUpdateInterval = interval(5000);

    this.balanceUpdateInterval.subscribe( (val) => {
      this.aeWalletService.updateBalance();
    });
  }

}
