import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyDihbdyq4ZGmCR5R-bBRcZyARTyrCYOwoE',
	authDomain: 'crown-db-ec4f1.firebaseapp.com',
	databaseURL: 'https://crown-db-ec4f1.firebaseio.com',
	projectId: 'crown-db-ec4f1',
	storageBucket: 'crown-db-ec4f1.appspot.com',
	messagingSenderId: '602528944794',
	appId: '1:602528944794:web:3a3130a011b1013fc1c523',
	measurementId: 'G-F8TQX4WWVT'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
