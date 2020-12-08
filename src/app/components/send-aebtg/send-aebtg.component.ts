import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { AeWalletService } from './../../services/wallet/ae-wallet.service';

import { AppState } from './../../entities/app-state.enum';

interface FormControls {
  toAddress: [string, ((control: AbstractControl) => ValidationErrors | null )[]];
  amount: [string, ((control: AbstractControl) => ValidationErrors | null )[]];
}

@Component({
  selector: 'app-send-aebtg',
  templateUrl: './send-aebtg.component.html',
  styleUrls: ['./send-aebtg.component.css']
})
export class SendAebtgComponent implements OnInit {

  @Output() changeStateCallback = new EventEmitter<AppState>();

  constructor(
    private aeWalletService: AeWalletService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  public stateEnum = AppState;
  public form: FormGroup;

  ngOnInit(): void {
  }

  public sendBTG(): void {
    if (this.form.valid) {
      const address = this.form.controls.toAddress.value;
      const amount = this.form.controls.amount.value;

      this.aeWalletService.sendAEBTG(address, amount);
    } else {
      console.log('invalid form, please provide all necessary fields')
    }
  }

  public navigateTo(state: AppState): void {
    this.changeStateCallback.next(state);
  }

  private createForm(): void {
    const formControls: FormControls = {
      toAddress: ['', [ Validators.required ]],
      amount: ['', [ Validators.required ]]
    };

    this.form = this.formBuilder.group(formControls);
  }

}
