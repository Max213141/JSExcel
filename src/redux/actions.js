import {TABLE_RESIZE} from "./types";

// Action creator
export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}

