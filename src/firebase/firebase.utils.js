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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapshot = await userRef.get()

	if (!snapshot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('Error creating user', error.massage)
		}
	}
	return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
