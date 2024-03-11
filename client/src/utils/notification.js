import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCsw-2N7GEJVH_vVAgR_tqoC624Ms3vDXk",
  authDomain: "pustnotifplayapp.firebaseapp.com",
  projectId: "pustnotifplayapp",
  storageBucket: "pustnotifplayapp.appspot.com",
  messagingSenderId: "349891021381",
  appId: "1:349891021381:web:be6d2e8bc0f3a2d665312c",
  measurementId: "G-JSWZJLXV97",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  // console.log(permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BPq3AknNowF4XLCmMIwS07jS0blP4Z34-ZEu-aSg3LSa2_7lGsD9UJC6ARa5BCBEQBZrh7PfaLJZu6Ka1io0Fho",
    });
    // console.log(token);
  }
};
