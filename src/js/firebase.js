// Import the functions you need from the SDKs you need

const firebaseConfig = {
    apiKey: "AIzaSyCb3xCw7hs4BmPCsqNi1W8Z_5gbjM11WsA",
    authDomain: "ranjith-giveaway-app.firebaseapp.com",
    projectId: "ranjith-giveaway-app",
    storageBucket: "ranjith-giveaway-app.appspot.com",
    messagingSenderId: "822039799824",
    appId: "1:822039799824:web:542b1d67fca92bfa4f4295",
    measurementId: "G-W9XJBTP4XE",
};

const COLLECTION_NAME = "requests";

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const createRecord = (record) => {
    return db
        .collection(COLLECTION_NAME)
        .add(record)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
};

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                resolve(user);
                // ...
                // console.log("User successfully login", user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                reject({ errorCode, errorMessage });
            });
    });
};

const getAllRequest = () => {
    return new Promise((resolve, reject) => {
        const results = db
            .collection(COLLECTION_NAME)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    return doc.data();
                    console.log(doc.data());
                });
                resolve(results);
            })
            .catch((e) => {
                console.log("error in getting.", e);
                reject(e);
            });
    });
};