import { GET_TOKEN } from "./action";

const initialState = {
    token : ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TOKEN : return {...state, state : action.payload}

        default : return state;
    }
}

export default reducer;