/*eslint-disable*/

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDTzcL8V4VcdXyrNYL6egSK-b5wv9dKAWc",
  authDomain: "gws-app-test.firebaseapp.com",
  projectId: "gws-app-test",
  storageBucket: "gws-app-test.appspot.com",
  messagingSenderId: "322251609988",
  appId: "1:322251609988:web:5eaf888ea6a888bf5eafd1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
