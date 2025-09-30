// Firebase Configuration
// Replace these values with your actual Firebase project credentials
export const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "YOUR_DATABASE_URL"
};

// Instructions to set up Firebase:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select an existing one
// 3. Go to Project Settings > General
// 4. Scroll down to "Your apps" and click on the web icon (</>)
// 5. Register your app and copy the configuration
// 6. Replace the values above with your actual Firebase config
// 7. Enable Realtime Database in Firebase Console
// 8. Set database rules to allow read/write (for development):
//    {
//      "rules": {
//        ".read": true,
//        ".write": true
//      }
//    }
