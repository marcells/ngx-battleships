import * as fromRoot from '../../reducers';
import { Slice } from './harbour.reducer'
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  harbour: Slice
}

export const visitHarbour = createFeatureSelector<Slice>('harbour');

export const warhipPlan = createSelector(visitHarbour, harbour => harbour.warshipPlan);

export const position = createSelector(visitHarbour, harbour => harbour.warshipPositions);

export const all = createSelector(warhipPlan, position, (plan, currentPosition) => ({ plan, currentPosition }));
