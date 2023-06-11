import * as React from "react"
import { FilterDispatchContext, FilterStateContext } from "./context"

export function useFilterDispatch() {
    const dispatch = React.useContext(FilterDispatchContext);
    if (!dispatch) {
        throw new Error('Dispatch not found');
    }
    return dispatch;
}

export function useFilterState() {
    const state = React.useContext(FilterStateContext);
    if (!state) {
        throw new Error('Filter State not found');
    }
    return state;
}