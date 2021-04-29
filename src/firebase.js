import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG8j5pM9sXPXiztn_GRaiHw9QVerD0Fsg",
    authDomain: "disney-clone-8986e.firebaseapp.com",
    projectId: "disney-clone-8986e",
    storageBucket: "disney-clone-8986e.appspot.com",
    messagingSenderId: "410107210233",
    appId: "1:410107210233:web:27139febdc85519434f528",
    measurementId: "G-TCYDHC7RN9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage= firebase.storage();

  export{ auth, provider,storage};
  export default db;
  