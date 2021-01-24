
import userActionTypes from "./user-action-types"

const INTIAL_STATE = {

    currentUser : null
}


const userReducers = (state = INTIAL_STATE, action) => {

    switch(action.type){

        case userActionTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser : action.payload
            }

        default : return state
    }
}

export default userReducers;