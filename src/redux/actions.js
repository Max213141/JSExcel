import {CHANGE_TEXT, CHANGE_STYLES, UPDATE_DATE, TABLE_RESIZE, APPLY_STYLE, CHANGE_TITLE} from "./types";

// Action creator
export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}

export function changeText(data) {
    return {
        type: CHANGE_TEXT,
        data
    }
}

export function updateDate() {
    return {
        type: UPDATE_DATE
    }
}

export function changeStyles(data) {
    return {
        type: CHANGE_STYLES,
        data
    }
}

export function applyStyle(data) {
    return {
        type: APPLY_STYLE,
        data
    }
}

export function changeTitle(data) {
    return {
        type: CHANGE_TITLE,
        data
    }
}
