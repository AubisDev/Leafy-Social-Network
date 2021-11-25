import { types } from "../types";

const initialValues = {
    name: null,
    token: '',
    id: '',
    error: false
}

const authReducer = ( state=initialValues, action ) =>{
    switch( action.type ){
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                token: action.payload.accessToken,
                uid: action.payload.uid,
                error: false
            }
        case types.LOGIN_SUCCCES:
            return {
                ...state,
                token: action.payload.accessToken,
                uid: action.payload.uid,
                error: false
            }

        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: true
            }

        case types.USER_LOOGUT:
            return
        
        default:
            return state;
    }

}

export default authReducer