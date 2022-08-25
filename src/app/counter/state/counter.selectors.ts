import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const COUNTER_STATE_NAME = 'counter'

const stateFeature = createFeatureSelector<CounterState>(COUNTER_STATE_NAME)
export const couterSelector = createSelector(stateFeature, (state) => {
    return state.counter
})
export const textSelector = createSelector(stateFeature, (state) => {
    return state.text
})

