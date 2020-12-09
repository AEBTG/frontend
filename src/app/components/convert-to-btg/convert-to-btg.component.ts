import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { AeWalletService } from './../../services/wallet/ae-wallet.service';

import { AppState } from './../../entities/app-state.enum';

interface FormControls {
  btgAddress: [string, ((control: AbstractControl) => ValidationErrors | null )[]];
  amount: [string, ((control: AbstractControl) => ValidationErrors | null )[]];
}

@Component({
  selector: 'app-convert-to-btg',
  templateUrl: './convert-to-btg.component.html',
  styleUrls: ['./convert-to-btg.component.css']
})
export class ConvertToBtgComponent implements OnInit {

  @Output() changeStateCallback = new EventEmitter<AppState>();

  constructor(
    private aeWalletService: AeWalletService,
    private formBuilder: FormBuilder
  ) {

    this.disabledSend = false;
    this.createForm();
  }

  public stateEnum = AppState;
  public form: FormGroup;

  public disabledSend: boolean;

  ngOnInit(): void {
  }

  public convertToBtg(): void {
    if (this.form.valid) {
      const address = this.form.controls.btgAddress.value;
      const amount = this.form.controls.amount.value;

      this.disabledSend = true;
      this.aeWalletService.burn(address, amount).then( (val) => {
        if (val) {
          this.disabledSend = false;

          if (val === 'success') {
            alert('Successfully transfered to BTG');
          }
        }
      });
    } else {
      console.log('invalid form, please provide all necessary fields')
    }
  }

  public navigateTo(state: AppState): void {
    this.changeStateCallback.next(state);
  }

  private createForm(): void {
    const formControls: FormControls = {
      btgAddress: ['', [ Validators.required ]],
      amount: ['', [ Validators.required ]]
    };

    this.form = this.formBuilder.group(formControls);
  }

}
