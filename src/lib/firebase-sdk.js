//src >  firebase > firebase-sdk.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDIYfd341igAf3OW3gjmfCF91KGVUWI5D8",
  authDomain: "gallery-ca6cc.firebaseapp.com",
  projectId: "gallery-ca6cc",
  storageBucket: "gallery-ca6cc.appspot.com",
  messagingSenderId: "19095802754",
  appId: "1:19095802754:web:ecd6d81b338e002db1759b",
  measurementId: "G-69K0MPF4FY"
};

const app = initializeApp(firebaseConfig);
let messaging;
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  messaging = getMessaging();
}

export const getClientToken = async (setTokenFound) => {
  let currentToken = await getToken(messaging,{vapidKey:'BFZnAUM8BpGuwmjkzT6-SrpIwds9aw8J8nXOMv-BvQmhVd-4Ir3pP8qVJw4JlYqbtDxhujosRgmN-N6ZD9uDvfo'});
  return currentToken;
}

