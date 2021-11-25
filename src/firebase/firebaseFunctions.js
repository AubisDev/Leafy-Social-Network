import { getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword
 } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

export const userRegister = (email, password, fullname) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const { accessToken, email, uid, displayName } = userCredential.user;
            
            console.log({accessToken, email, uid, displayName})
                    // De aqui necesitamos: {accessToken,email,uid, e insertar a displayName el fullname

            // ...
          })
        .catch( function (error){
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
        })
}
export const userLogin = ( email, password ) =>{
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage)
      });
}



