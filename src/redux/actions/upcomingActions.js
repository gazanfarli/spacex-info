import { GET_UPCOMING_LAUNCHES } from "./actionTypes/enums"

const getUpcomings = (data) => {
    return {
        type: GET_UPCOMING_LAUNCHES,
        payload: data
    }
}

export default getUpcomings;