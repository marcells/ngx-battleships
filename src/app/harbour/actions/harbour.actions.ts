import { Action } from '@ngrx/store';
import { IProvideWarshipPlan } from '../../lib/battleships/contracts';
import { BattleFieldPosition } from '../../lib/battleships/contracts/battlefield-position'

export enum HarbourActionTypes {
  HarbourAction = '[Harbour] Action',
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan',
  UpdateWarshipPositions = '[Harbour] Update Warship Positions'
}

export class Harbour implements Action {
  readonly type = HarbourActionTypes.HarbourAction;
}

export class ChooseWarshipPlan implements Action {
  readonly type = HarbourActionTypes.ChooseWarshipPlan;

  constructor (public payload: IProvideWarshipPlan) {}
}

export class UpdateWarshipPositions implements Action {
  readonly type = HarbourActionTypes.UpdateWarshipPositions;

  constructor (public payload: BattleFieldPosition[]) {

  }
}

export type HarbourActions = Harbour | ChooseWarshipPlan | UpdateWarshipPositions;
