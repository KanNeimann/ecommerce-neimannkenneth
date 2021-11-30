import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBn8rGV7Xa094MRIJOhS9eBFGS0Mev7J7Q",
    authDomain: "volcanic-ecommerce.firebaseapp.com",
    projectId: "volcanic-ecommerce",
    storageBucket: "volcanic-ecommerce.appspot.com",
    messagingSenderId: "231759294459",
    appId: "1:231759294459:web:826b887b15693cd7c3255e"
};

const app = firebase.initializeApp(firebaseConfig);

// Agregando nuestras funciones 

export function getFirestore() {
    return firebase.firestore(app)
}