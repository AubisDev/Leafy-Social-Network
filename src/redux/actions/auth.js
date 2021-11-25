import { types } from "../types";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
} from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";

const auth = getAuth(app);

export const startRegister = ( email, password, name ) => { 
    return  async( dispatch ) => {

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if ( response.user.accessToken ){
                const user = response.user;
                user.displayName = name;
                console.log( user )
                //dispatch( registerSuccess( user.name, user.accessToken, user.uid ) );
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(error);
            console.log(errorCode);
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
              } else {
                alert(errorMessage);
            }
            dispatch( registerError( errorMessage) )

        }
    }

}

export const startLoginWithEmailAndPassword = ( email, password ) =>{
    return async(dispatch) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            if ( response.user.accessToken ){
                const user = response.user;
                console.log(user)
                //dispatch( registerSuccess( user.displayName, user.accessToken, user.uid ) );
            }
        } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage)
        };
        }
}


const registerSuccess = ( name, accessToken, uid ) => ({
    type: types.REGISTER_SUCCESS,
    payload: {
        name,
        accessToken,
        uid
    }
})

const registerError = ( message ) => ({
    type: types.REGISTER_ERROR,
    payload: message
})
