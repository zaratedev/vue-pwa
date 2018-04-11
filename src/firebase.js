import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
	apiKey: "AIzaSyCxYFprapj2aG4y1qXRmdx83-rRt0sI40g",
	authDomain: "vue-wpa.firebaseapp.com",
	databaseURL: "https://vue-wpa.firebaseio.com",
	projectId: "vue-wpa",
	storageBucket: "vue-wpa.appspot.com",
	messagingSenderId: "32732976934"
});

export default firebase;