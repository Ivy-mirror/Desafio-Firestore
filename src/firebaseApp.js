// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwC182qqUF4sNP0V9-esH3fdcfjPvpjFc',
  authDomain: 'desafio-firestore-31fad.firebaseapp.com',
  projectId: 'desafio-firestore-31fad',
  storageBucket: 'desafio-firestore-31fad.appspot.com',
  messagingSenderId: '306985451773',
  appId: '1:306985451773:web:6c66a2cfa21af9a5f13e94'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $db = getFirestore(app)
//el signo $ es una convención que hacen los distintos desarrollador para evitar choques
export { $db }
