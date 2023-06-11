import * as React from "react"
import { FilterDispatchContext } from "./context"

export function useFilterDispatch() {
    const dispatch = React.useContext(FilterDispatchContext)
    if (!dispatch) throw new Error('Dispatch not found')
    return dispatch
}