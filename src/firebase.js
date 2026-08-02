// Firebase setup for the contact form.
//
// 1. Go to https://console.firebase.google.com, create a project (or use an existing one).
// 2. Project settings → General → "Your apps" → add a Web app → copy the config values.
// 3. Build → Firestore Database → Create database (start in production or test mode).
// 4. Fill in the values below via environment variables — copy .env.example to .env
//    and paste your real config there (never commit .env — it's already git-ignored).
// 5. For GitHub Pages deployment, add the same values as repository secrets
//    (Settings → Secrets and variables → Actions) so the GitHub Actions build can inject them.

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Writes one contact-form submission into the "contactSubmissions" collection.
export function saveContactSubmission(data) {
  return addDoc(collection(db, 'contactSubmissions'), {
    ...data,
    submittedAt: serverTimestamp(),
  });
}
