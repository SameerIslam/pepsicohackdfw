import { db } from "./firebase_config";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc} from "firebase/firestore";

// this function adds users, works exactly like addPost, but the merge attribute isint set because editing users is not a feature yet
export async function addUser(userObject){
    const collectionRef = collection(db, 'users');
    const userRef = doc(collectionRef, userObject.userId);
    await setDoc(userRef, userObject.toMap());
    return userObject;
}

