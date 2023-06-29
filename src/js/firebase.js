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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// const person = {
//     name: "Ranjith",
//     place: "Namakkal",
// };

const createRecord = (record) => {
    // console.log("record", record);
    //console.log(`record ${record}`);

    return db
        .collection("requests")
        .add(record)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
};