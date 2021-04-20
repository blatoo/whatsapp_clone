import firebase from "firebase"

const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBtpL2NR1zGGurWidGirR6w1zOeU7xOIGM",
    authDomain: "whatsappclone-31816.firebaseapp.com",
    projectId: "whatsappclone-31816",
    storageBucket: "whatsappclone-31816.appspot.com",
    messagingSenderId: "939099947977",
    appId: "1:939099947977:web:d05fdb239c1fc31d3fde18",
  })
  .firestore()

export default db
