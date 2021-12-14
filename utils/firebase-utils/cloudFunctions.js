import firebase from './firebase';
import axios from 'axios';
export async function createLink(data) {
  // const createLinkOnFirebase = firebase.functions().httpsCallable('createLink')
  // console.log(createLinkOnFirebase , ".............a..............a.")
  // const result = await createLinkOnFirebase(data)

  // console.log(result)
  const result = await axios.post(
    'https://soprano-backend.herokuapp.com/web3/balance',

    data,

    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(result, 'firebase result.............');
  return result.data;
}

export async function loginWithNFT(data) {
  // const createLinkOnFirebase = firebase.functions().httpsCallable('createLink')
  // console.log(createLinkOnFirebase , ".............a..............a.")
  // const result = await createLinkOnFirebase(data)

  // console.log(result)
  const result = await axios.post(
    'https://soprano-backend.herokuapp.com/login-metamask',

    data,

    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(result, 'firebase result.............');
  return result.data;
}

export async function authNftHolder(data) {
  const createLinkOnFirebase = firebase
    .functions()
    .httpsCallable('authNftHolder');
  const result = await createLinkOnFirebase(data);
  console.log(result);
  return result.data;
}
