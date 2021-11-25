import { types } from "../types";

const initialValues = {
    name: null,
    token: '',
    id: ''
}

const authReducer = ( state=initialValues, actions ) =>{
    switch(actions.type){
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCCES:
            return {}

        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
            return {}

        case types.USER_LOOGUT:
            return
        
        default:
            return state;
    }

}

export default authReducer