import { types } from "../types";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup, 
    GoogleAuthProvider
} from "firebase/auth";
import { app, provider } from "../../firebase/firebaseConfig";

const auth = getAuth(app);

export const startRegister = ( name, email, password ) => { 
    return  async( dispatch ) => {

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if ( response.user.accessToken ){
                const { name, accessToken, uid } = response.user;
                dispatch( registerSuccess( name, accessToken, uid ) );
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
                const { accessToken, uid, displayName } = response.user;
                dispatch( LoginSuccess( 'Aubis', accessToken, uid )  )
            }
        } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                dispatch( LoginError( errorMessage ) )
        };
        }
}

export const startLoginWithGoogleAccount = () => {
    return async(dispatch) => {
        try {
            const response = await signInWithPopup(auth, provider);
            const credential = await GoogleAuthProvider.credentialFromResult( response );
            const  { displayName, accessToken, uid } = response.user;
            dispatch( LoginSuccess( displayName, accessToken, uid ) );
    
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            dispatch( LoginError( errorMessage ) )
        }
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


const LoginSuccess = ( name, accessToken, uid ) => ({
    type: types.LOGIN_SUCCESS,
    payload: {
        name,
        accessToken,
        uid
    }
})

const LoginError = ( message ) => ({
    type: types.LOGIN_ERROR,
    payload: message
})
