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

            localStorage.setItem('USER_TOKEN', action.payload.accessToken);
            return {
                ...state,
                name: action.payload.name,
                token: action.payload.accessToken,
                id: action.payload.uid,
                error: false
            }
        case types.LOGIN_SUCCESS:

            localStorage.setItem('USER_TOKEN', action.payload.accessToken);
            return {
                ...state,
                token: action.payload.accessToken,
                id: action.payload.uid,
                name: action.payload.name,
                error: false
            }

        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: true
            }

        case types.USER_LOGOUT:
            return
        
        default:
            return state;
    }

}

export default authReducer