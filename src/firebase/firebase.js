import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMxF4swuX73drJbecHuCoGyGjEEG1hZqc",
  authDomain: "crown-desktop.firebaseapp.com",
  projectId: "crown-desktop",
  storageBucket: "crown-desktop.appspot.com",
  messagingSenderId: "271108807913",
  appId: "1:271108807913:web:4671c01d8812e10b866478",
};

firebase.initializeApp(config);

export const createUserProfeleDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

// PROGRAMETICALLY ADDED SHOP COLLECTIONS INTO FIREBASE

export const addCollectionAndDoc = async (collectionName, documentToAdd) => {
  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch();

  documentToAdd.forEach((doc) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, doc);
  });

  return await batch.commit();
};

// Retrive collection data from firebase (get data);

export const convertCollectionSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // accumualtor[collection.title.toLowerCase] = collection;
  // uporer line er meaning tah hocche collection key = collection body
  // example : hats = hats collection ei function ti loop hobe respectively
  // hats -> jacket-> womens -> etc looping

  return transformedCollection.reduce((accumualtor, collection) => {
    accumualtor[collection.title.toLowerCase()] = collection;
    return accumualtor;
  }, {});
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
