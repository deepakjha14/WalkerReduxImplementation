import { Action } from '@ngrx/store';
import { BankerPlayerBetInterface } from "../models/banker.player.interface";
import { ActionTypes } from './app.actions';
import { AppState } from '../models/app.state';


class InitState implements AppState {
    bankerState; playerState; maxTransaction; transactionLimit; minTransaction;

    constructor(bankerState: BankerPlayerBetInterface, playerState: BankerPlayerBetInterface, maxTransaction: number, transactionLimit: number, minTransaction: number) {
        this.bankerState = bankerState; this.playerState = playerState; this.maxTransaction = maxTransaction;
        this.transactionLimit = transactionLimit; this.minTransaction = minTransaction;
    }
}

class BankerPlayerBet implements BankerPlayerBetInterface {
    totalPriceMoney;
    minBet;
    constructor(totalPriceMoney: number, minBet: number) {
        this.totalPriceMoney = totalPriceMoney;
        this.minBet = minBet;
    }
}
export const initialState = new InitState(new BankerPlayerBet(0, 0), new BankerPlayerBet(0, 0), 5000, 5, 100);

export function casinoReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.BankerBet:
            return {
                ...state,
                ...action.payload
            };

        case ActionTypes.PlayerBet:
            return {
                ...state,
                ...action.payload
            };

        case ActionTypes.SessionTransaction:
            //debugger
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}