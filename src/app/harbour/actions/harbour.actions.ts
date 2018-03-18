import { Action } from '@ngrx/store';
import { IProvideWarshipPlan } from '../../lib/battleships/contracts';
import { BattleFieldPosition } from '../../lib/battleships/contracts/battlefield-position'

export enum HarbourActionTypes {
  HarbourAction = '[Harbour] Action',
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan',
  ChooseWarshipPlanSuccess = '[Harbour] Choose Warship Plan Success',
  UpdateWarshipPositions = '[Harbour] Update Warship Positions',
  UpdateWarshipPositionsSuccess = '[Harbour] Update Warship Positions Success',
  RecoverWarshipPlan = '[Harbour] Recover Warship Plan',
  RecoverWarshipPlanSuccess = '[Harbour] Recover Warship Plan Success',
}

export class Harbour implements Action {
  readonly type = HarbourActionTypes.HarbourAction;
}

export class ChooseWarshipPlan implements Action {
  readonly type = HarbourActionTypes.ChooseWarshipPlan;

  constructor (public payload: IProvideWarshipPlan) {}
}

export class ChooseWarshipPlanSuccess implements Action {
  readonly type = HarbourActionTypes.ChooseWarshipPlanSuccess;

  constructor (public payload: IProvideWarshipPlan) {}
}

export class UpdateWarshipPositions implements Action {
  readonly type = HarbourActionTypes.UpdateWarshipPositions;

  constructor (public payload: BattleFieldPosition[]) {

  }
}

export class RecoverWarshipPlan implements Action {
  readonly type = HarbourActionTypes.RecoverWarshipPlan;
}

export class RecoverWarshipPlanSuccess implements Action {
  readonly type = HarbourActionTypes.RecoverWarshipPlanSuccess;

  constructor (public payload: IProvideWarshipPlan) {}
}

export class UpdateWarshipPositionsSuccess implements Action {
  readonly type = HarbourActionTypes.UpdateWarshipPositionsSuccess;

  constructor (public payload: BattleFieldPosition[]) {

  }
}

export type HarbourActions =
  Harbour
  | ChooseWarshipPlan
  | ChooseWarshipPlanSuccess
  | UpdateWarshipPositions
  | UpdateWarshipPositionsSuccess
  | RecoverWarshipPlan
  | RecoverWarshipPlanSuccess;
