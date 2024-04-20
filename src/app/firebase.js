// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instagram-next-a94c9.firebaseapp.com",
  projectId: "instagram-next-a94c9",
  storageBucket: "instagram-next-a94c9.appspot.com",
  messagingSenderId: "564658498329",
  appId: "1:564658498329:web:596539b97b56eb85417388"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read 
//         allow write: if 
//         request.resource.size < 2* 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
        
//       }
//     }