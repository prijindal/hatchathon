import firebase from 'firebase';
import fetch from 'node-fetch';

const config = {
  apiKey: 'AIzaSyAUW7ovvjcnWxPuCe31NnEprkx8TrE5bl4',
  authDomain: 'vim-tutorial.firebaseapp.com',
  storageBucket: 'vim-tutorial.appspot.com',
};

firebase.initializeApp(config);

const storage = firebase.storage();

export const login = () => new Promise((resolve, reject) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    resolve(result);
  })
  .catch(reject);
});

export const getFile = email => new Promise((resolve, reject) => {
  const pathRef = storage.ref(`${email}/test.html`);
  pathRef.getDownloadURL()
  .then((url) => {
    fetch(url)
    .then((resp) => {
      resp.text()
      .then(resolve)
      .catch(reject);
    })
    .catch(reject);
  })
  .catch(reject);
});

export const saveFile = (email, text) => new Promise((resolve, reject) => {
  const pathRef = storage.ref(`${email}/test.html`);
  pathRef.putString(text).then(resolve).catch(reject);
});

export default firebase;
