import { Injectable, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UpdateTransaction } from "../../state/app.actions";

@Injectable({
  providedIn: 'root'
})
export class NgrxfacadeService implements OnInit {
  transactionLimit;
  fullState;
  constructor(private store: Store<any>) {

    this.fullState = this.store.pipe(select('CasinoState'));
    this.fullState.subscribe(res => {
      //debugger
      this.transactionLimit = res.transactionLimit;
    });
  }

  ngOnInit() {
    // debugger
    // this.fullState = this.store.pipe(select('CasinoState'));
    // this.transactionLimit = this.fullState.transactionLimit;
  }

  updateTransaction() {
    debugger
    if (this.transactionLimit > 1) {
      this.store.dispatch(new UpdateTransaction({ 'transactionLimit': --this.transactionLimit }));
    }
    if (this.genRandomWinner() === 'player') {
      this.store.dispatch(new UpdateTransaction({ 'transactionLimit': --this.transactionLimit }));
    } else {
      this.store.dispatch(new UpdateTransaction({ 'transactionLimit': --this.transactionLimit }));
    }
  }
  genRandomWinner() {
    // If even it would be player, banker otherwise
    let randNum = Math.random() * 100;
    if (randNum % 2) {
      return 'banker';
    } return 'player';
  }
}
