import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HarbourActions, HarbourActionTypes, ChooseWarshipPlan, ChooseWarshipPlanSuccess, UpdateWarshipPositions, UpdateWarshipPositionsSuccess, RecoverWarshipPlanSuccess } from '../actions/harbour.actions';
import { switchMap, map } from 'rxjs/operators';
import { LocalStorage } from '../../lib/local-storage';
import { IProvideWarshipPlan } from '../../lib/battleships/contracts';

@Injectable()
export class HarbourEffects {

  @Effect()
  effect$ = this.actions$
  .pipe(
    ofType(HarbourActionTypes.ChooseWarshipPlan),
    switchMap((action: ChooseWarshipPlan) =>
      this._storage.set('current-plan', action.payload).pipe(
        map(warshipPlan => new ChooseWarshipPlanSuccess(warshipPlan)))));

  @Effect()
  effect2$ = this.actions$
  .pipe(
    ofType(HarbourActionTypes.UpdateWarshipPositions),
    switchMap((action: UpdateWarshipPositions) =>
      this._storage.set('positions', action.payload).pipe(
        map(positions => new UpdateWarshipPositionsSuccess(positions)))));

  @Effect()
  effect3$ = this.actions$
  .pipe(
    ofType(HarbourActionTypes.RecoverWarshipPlan),
    switchMap(() =>
      this._storage
      .get<IProvideWarshipPlan>('current-plan')
      .pipe(map(plan => new RecoverWarshipPlanSuccess(plan)))
  ));

  constructor(private actions$: Actions, private _storage: LocalStorage) {}
}
