# Bethel Ministries

Bethel Ministries is a modern Christian church mobile app designed for Android and iOS. It includes:

- Christian song lyrics in Telugu and English
- Church announcements and updates
- Posters and event visuals
- Sermons and worship videos
- Pastor profiles and ministry team
- Prayer request access and contact information
- Admin dashboard for church staff
- Firebase backend for content and media management

## Features

- Clean blue/white/gold church aesthetic
- Home screen with announcement, poster, video and song highlights
- Bottom navigation with Home, Songs, Posters, Videos, Pastors and More
- Search for songs, pastors, announcements and videos
- Share and copy lyrics, posters and videos
- Admin-only content editing as a secure dashboard
- Responsive layout for both mobile and tablet
- Demo data for testing

## Tech stack

- React Native + Expo
- TypeScript
- Firebase Auth
- Firestore
- Firebase Storage
- React Navigation

## Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- Android Studio for Android builds
- Xcode for iOS builds on macOS
- Firebase project

## Install project dependencies

```bash
npm install
```

## Environment setup

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Update the values with your Firebase configuration.

## Start the app locally

```bash
npm start
```

Then:
- Press `a` for Android
- Press `i` for iOS
- Or scan the QR code with Expo Go

## Firebase setup

1. Create a Firebase project.
2. Enable Firebase Authentication and choose Email/Password.
3. Create a Firestore database.
4. Create a Firebase Storage bucket.
5. Add an admin user in Authentication.
6. Add the admin UID to the `admins` collection.
7. Add the Firebase config values to `.env`.

## Firestore collections

Create collections for:

- songs
- posters
- announcements
- videos
- pastors
- prayer_contacts
- church_info
- admins
- prayer_requests

## Firestore rules

See `firestore.rules` for an example secure policy.

## Storage rules

See `storage.rules` for example media upload rules.

## Demo data

The app includes demo seed data in `src/demo/seedData.ts` for quick testing.

## Admin login

Use a Firebase-authenticated admin email and password. Only a user whose UID exists in `admins` can access the admin dashboard.

## Android build instructions

```bash
npx expo prebuild
cd android
./gradlew assembleRelease
```

## iOS build instructions

Open the project in Xcode:

1. Open the generated iOS project.
2. Select your Apple Developer account.
3. Set bundle ID.
4. Build and archive.
5. Upload to App Store Connect.

## Publish to Google Play

1. Create a Google Play Developer account.
2. Create a new app in Play Console.
3. Upload the signed Android App Bundle (AAB).
4. Complete the store listing and privacy policy.
5. Submit app for review.

## Publish to Apple App Store

1. Create an Apple Developer account.
2. Create an app in App Store Connect.
3. Archive and upload from Xcode.
4. Add app metadata and screenshots.
5. Submit for App Review.

## Important notes

- Never commit secrets or Firebase keys to GitHub.
- Keep admin credentials in Firebase Authentication.
- Use Firestore and Storage rules to protect private data.
- Prayer requests should remain private.
- Store contact numbers in the database instead of hard-coding them.

## Project structure

```bash
bethel-ministries/
├─ App.tsx
├─ app.json
├─ package.json
├─ README.md
├─ firestore.rules
├─ storage.rules
├─ src/
│  ├─ components/
│  ├─ config/
│  ├─ demo/
│  ├─ i18n/
│  ├─ navigation/
│  ├─ screens/
│  ├─ services/
│  ├─ types/
│  └─ utils/
└─ assets/
```
