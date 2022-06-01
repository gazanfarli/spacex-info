import { GET_UPCOMING_LAUNCHES } from "../actions/actionTypes/enums";

const initialState = {
    upcomings: []
}

const UpcomingReducer = (state = initialState.upcomings, action) => {
    
    switch (action.type) {
        case GET_UPCOMING_LAUNCHES:
            return {
                ...state, upcomings: action.payload
            }
        default: return {
            state
        }
    }
}

export default UpcomingReducer;