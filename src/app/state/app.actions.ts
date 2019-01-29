import { Action } from '@ngrx/store';

export enum ActionTypes {
    BankerBet = '[App Component] BankerBet',
    PlayerBet = '[App Component] PlayerBet',
    SessionTransaction = '[App Component] UpdateTransaction'
}

export class UpdateBankerBet implements Action {
    readonly type = ActionTypes.BankerBet;
    constructor(public payload: any) { }
}

export class UpdatePlayerBet implements Action {
    readonly type = ActionTypes.PlayerBet;
    constructor(public payload: any) { }
}

export class UpdateTransaction implements Action {
    readonly type = ActionTypes.SessionTransaction;
    constructor(public payload: any) { }
}