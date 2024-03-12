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

export const app = initializeApp(firebaseConfig);
export let messaging;
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  messaging = getMessaging(app);
}

export const getClientToken = async () => {
  let currentToken = await getToken(messaging,{vapidKey:process.env.NEXT_PUBLIC_VAPIDKEY});
  return currentToken;
}