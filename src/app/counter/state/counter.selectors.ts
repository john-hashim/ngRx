import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const stateFeature = createFeatureSelector<CounterState>('counter')
export const couterSelector = createSelector(stateFeature, (state) => {
    return state.counter
})
export const textSelector = createSelector(stateFeature, (state) => {
    return state.text
})

