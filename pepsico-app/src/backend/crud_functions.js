import { db } from "./firebase_config";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { Board, fromBoardMap } from "./Board_Model";

var emptyBoard = new Array(20);
emptyBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var emptyRemaining = new Array(20);
emptyRemaining = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0,
];
const one_day = 1000 * 60 * 60 * 24;
const refreshTime = 7;

// this function adds users, works exactly like addPost, but the merge attribute isint set because editing users is not a feature yet
export async function addUser(userObject) {
  const collectionRef = collection(db, "users");
  const userRef = doc(collectionRef, userObject.userId);
  await setDoc(userRef, userObject.toMap());
  await createBoard(userObject.userId);
  return userObject;
}

export async function getBoard(userId) {
  const collectionRef = await collection(db, "users", userId, "boards");
  const q = await query(collectionRef, orderBy("dateCreated"), limit(1));
  const docSnapshot = await getDocs(q);
  return fromBoardMap(docSnapshot.docs[0].data());
}

export async function updateBoard(userId, boardObject) {
  const docRef = await doc(db, "users", userId, "boards", boardObject.boardId);
  await setDoc(docRef, boardObject.toMap(), { merge: true });
  return boardObject;
}

export async function createBoard(userId) {
  console.log(userId);
  const collectionRef = await collection(db, "users", userId, "boards");
  const q = await query(collectionRef, orderBy("dateCreated"), limit(1));
  const docSnapshot = await getDocs(q);
  //console.log(docSnapshot[0]);
  //console.dir(docSnapshot.docs[0].data);
  if (docSnapshot.size === 0) {
    const board = new Board(0, emptyBoard, emptyRemaining);
    console.log(board.toMap());
    const docRef = await doc(collectionRef, board.boardId);
    await setDoc(docRef, board.toMap());
    return;
  } else {
    const boardObject = fromBoardMap(docSnapshot.docs[0].data());
    var date = new Date();
    if (
      boardObject.resolved &&
      (date - boardObject.dateCreated) / one_day >= refreshTime
    ) {
      const board = new Board(0, emptyBoard, emptyRemaining);
      const docRef = doc(collectionRef, board.boardId);
      await setDoc(docRef, board.toMap());
      return;
    }
  }
}

export async function validate(brandId, circId){
    const docRef = await doc(db, 'productBrands' , brandId, 'circulation' , circId);
    const docSnapShot = await getDoc(docRef);
    if (docSnapShot.exists()){
        deleteDoc(docRef);
        const brandRef = await doc(db, 'productBrands' , brandId);
        const brandDoc = await getDoc(brandRef);
        return brandDoc.data().random_val;
    }else{
        return 0;
    }
    
}

