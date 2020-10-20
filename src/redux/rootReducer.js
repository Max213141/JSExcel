import {TABLE_RESIZE} from "./types";

export function rootReducer(state, action) {
    console.log(action)
    let prevState
    let field
    switch (action.type) {
        case TABLE_RESIZE:
            field = action.data.type === 'col' ? 'colState' : 'rowState'
            prevState = state[field] || {}
            prevState[action.data.id] = action.data.value
            return {...state, [field]: prevState}
        default: return state
    }
}