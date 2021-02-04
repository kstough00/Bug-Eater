import React from 'react'

function bugReducer(state = { bugs: [] }, action) {
    switch (action.type) {
        case "FETCH_BUGS_SUCCESS":
            return { ...state, bugs: action.payload };
        case ""
        default:
        return state;
    }
}

export default bugReducer;