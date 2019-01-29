import { BankerPlayerBetInterface } from "./banker.player.interface";

export interface AppState {
    bankerState: BankerPlayerBetInterface, playerState: BankerPlayerBetInterface, maxTransaction: number, transactionLimit: number, minTransaction: number;
}