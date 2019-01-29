import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { UpdateBankerBet, UpdatePlayerBet } from "./state/app.actions";

import { FormBuilder, Validators } from '@angular/forms';
import { NgrxfacadeService } from "./global/reduxfacade/ngrxfacade.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CasinoGame';
  formErrors = {
    bankerBet: false,
    playerBet: false,
    submitError: false
  };
  fbCasino;
  currState;

  constructor(private _fb: FormBuilder, private store: Store<any>, private ngf: NgrxfacadeService) {
  }

  ngOnInit() {
    this.fbCasino = this._fb.group({
      playerBet: [''],
      bankerBet: ['']
    });
    this.currState = this.store.pipe(select('CasinoState'));
    this.currState.subscribe(res => {
      //logic for total...
      this.fbCasino.controls.bankerBet.setValidators([Validators.minLength(3), Validators.max(res.maxTransaction), Validators.min(res.minTransaction)]);
      this.fbCasino.controls.playerBet.setValidators([Validators.minLength(3), Validators.max(res.maxTransaction), Validators.min(res.minTransaction)]);
    });
  }
  disableOther(e) {
    //debugger
    if (e.currentTarget.id === "playerBet" && e.currentTarget.id !== '') {
      this.fbCasino.controls.bankerBet.disable();
    }
    if (e.currentTarget.id === "bankerBet" && e.currentTarget.id !== '') {
      this.fbCasino.controls.playerBet.disable();
    }
    if (this.fbCasino.controls.playerBet.value === '' && this.fbCasino.controls.bankerBet.value === '') {
      this.fbCasino.controls.playerBet.enable();
      this.fbCasino.controls.bankerBet.enable();
    }
  }
  placeBet(e) {
    // submission logic
    debugger
    if (this.fbCasino.controls.bankerBet.invalid) {
      this.formErrors = { ...this.formErrors, bankerBet: true };
    }
    if (this.fbCasino.controls.playerBet.invalid) {
      this.formErrors = { ...this.formErrors, playerBet: true };
    }
    if (this.fbCasino.valid) {
      this.formErrors = {
        playerBet: false,
        bankerBet: false,
        submitError: false
      };
      this.ngf.updateTransaction();
    }
  }


}
