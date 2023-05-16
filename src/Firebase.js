import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDoBvFrtluPeyw31zUEdHsxRAnIQEC8x5c",
    authDomain: "fir-with-react-51579.firebaseapp.com",
    projectId: "fir-with-react-51579",
    storageBucket: "fir-with-react-51579.appspot.com",
    messagingSenderId: "119557920219",
    appId: "1:119557920219:web:475063d417cf9c3c3283fe",
    measurementId: "G-N77692EJF1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
