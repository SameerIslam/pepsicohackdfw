import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { addUser } from "./crud_functions";
import {auth, provider} from "./firebase_config";
import { User } from "./User_Model";


export async function signIn(){
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
      // ...
    }).then((user)=>{
        var newUser = new User(user['displayName'],user['email'],user['uid']);
        console.log(newUser);
        return addUser(newUser);
        //return newUser;
    }).then((userObject)=>{
        console.log(userObject)
    })
    .catch((error) => {
        console.log(error.message);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

