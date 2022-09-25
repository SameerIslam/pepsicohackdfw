import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { addUser } from "./crud_functions";
import {auth, provider} from "./firebase_config";
import { loadData } from "./testing";
import { User } from "./User_Model";


export async function signIn(){
    const result = await signInWithPopup(auth, provider);
    const credential = await GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    var newUser = new User(user['displayName'],user['email'],user['uid']);
    console.log(newUser);
    const u = await  addUser(newUser);
    //loadData();
    return u;
    // .then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
      
      
    //   // The signed-in user info.
      
    //   return user;
    //   // ...
    // }).then((user)=>{
       
    //     //return newUser;
    // }).then((userObject)=>{
    //     console.log(userObject)
    // })
    // .catch((error) => {
    //     console.log(error.message);
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
}

