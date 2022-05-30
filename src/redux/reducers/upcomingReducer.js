import { GET_UPCOMING_LAUNCHES } from "../actions/actionTypes/enums";

const initialState = {
    upcomings: []
}

const upcomingReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_UPCOMING_LAUNCHES: 
        return {
            ...state
        }
        default: return {
            state
        }
    }
}

export default upcomingReducer;