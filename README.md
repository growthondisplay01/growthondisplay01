# Growth on Display — React/Vite Source Code

A React + Vite site with a contact form that saves submissions to Firebase Firestore.

## Run locally

1. Install Node.js 18 or newer.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your Firebase project's config values
   (see "Connect Firebase" below).
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open the printed local URL (usually http://localhost:5173).

## Connect Firebase

1. Go to the [Firebase console](https://console.firebase.google.com) and create a project
   (or use an existing one).
2. In your project: **Project settings → General → Your apps → Add app → Web**.
   Give it a nickname, skip Firebase Hosting.
3. Copy the `firebaseConfig` values it shows you.
4. In this project, copy `.env.example` to `.env` and paste those values in as:
   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   ```
5. In the Firebase console: **Build → Firestore Database → Create database**.
   Start in test mode to begin with (lock it down with security rules before going live —
   test mode allows anyone to read/write for 30 days).
6. Submissions from the contact form are written to a `contactSubmissions` collection —
   you'll see them appear in the Firestore console as people submit the form.

`.env` is already git-ignored, so your keys won't be committed.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds
the site and publishes it automatically on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. In the repo: **Settings → Secrets and variables → Actions → New repository secret**,
   and add each of these (same values as your `.env`):
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
4. Push to `main` (or run the workflow manually from the **Actions** tab). The workflow
   builds the site and deploys it to GitHub Pages.
5. Your site will be live at `https://<your-github-username>.github.io/<repo-name>/`.

`vite.config.js` uses a relative build base (`base: './'`), so the build works under a
GitHub Pages project subpath without any extra configuration.

## Build for other hosting

```bash
npm run build
```

Upload the generated `dist` folder to any static host (Netlify, Vercel, etc.) — a
`netlify.toml` is already included for Netlify.
