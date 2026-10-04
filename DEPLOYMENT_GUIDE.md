# Bethel Ministries - App Store Deployment Guide

This guide walks you through publishing the Bethel Ministries app to both Google Play Store and Apple App Store.

## Prerequisites

### General Requirements
- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- EAS CLI: `npm install -g eas-cli`
- Git installed
- `.env` file configured with Firebase credentials (see `.env.example`)

### For Google Play Store
- Google Play Developer account ($25 one-time fee)
- Google Play Console access
- A keystore file for signing Android app bundles (AAB)

### For Apple App Store
- Apple Developer account ($99/year)
- Apple App Store Connect access
- macOS machine with Xcode (for iOS builds)
- An Apple Developer certificate

---

## Step 1: Set Up EAS Build (Expo Application Services)

EAS handles the build process for both platforms. This is the recommended approach for Expo apps.

### 1.1 Initialize EAS in Your Project

```bash
eas build:configure
```

This creates `eas.json` in your project root.

### 1.2 Configure eas.json

The file should look like this:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "distribution": "store"
    }
  },
  "submit": {
    "production": {
      "android": {
        "track": "internal"
      },
      "ios": {}
    }
  }
}
```

### 1.3 Link Your Expo Account

```bash
eas login
```

Enter your Expo credentials (create account at https://expo.dev if needed).

---

## Step 2: Configure app.json

Ensure your `app.json` includes all required fields:

```json
{
  "expo": {
    "name": "Bethel Ministries",
    "slug": "bethel-ministries",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#1E40AF"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "bundleIdentifier": "com.bethelministries.app",
      "buildNumber": "1",
      "supportsTabletMode": true
    },
    "android": {
      "package": "com.bethelministries.app",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#1E40AF"
      },
      "permissions": [
        "android.permission.INTERNET",
        "android.permission.CAMERA",
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [],
    "extra": {
      "eas": {
        "projectId": "YOUR_EAS_PROJECT_ID"
      }
    }
  }
}
```

---

## Step 3: Create Required Assets

You need the following images (store them in `assets/`):

- **icon.png** (1024x1024px) - App icon
- **splash.png** (1284x2778px for iPhone, or adaptive for both)
- **adaptive-icon.png** (1080x1080px) - Android adaptive icon foreground
- **favicon.png** (192x192px) - Web favicon

### Generate Icons Using Expo

```bash
npx expo-cli prebuild --template
```

Or use online tools like:
- https://www.appicon.co/
- https://icon.kitchen/

---

## Step 4: Build for Android (Google Play Store)

### 4.1 Create Android Keystore

Generate a keystore for signing your APK/AAB:

```bash
eas build:configure --platform android
```

When prompted, choose to create a new keystore. EAS will handle this automatically.

### 4.2 Build Android App Bundle (AAB)

```bash
eas build --platform android --auto-submit
```

Or build without auto-submit:

```bash
eas build --platform android
```

This creates an `.aab` file. The build takes 10-20 minutes.

### 4.3 Monitor Build

```bash
eas build:list
eas build:view <BUILD_ID>
```

---

## Step 5: Publish to Google Play Store

### 5.1 Create Google Play Developer Account

1. Visit https://play.google.com/console
2. Sign in with your Google account
3. Pay the $25 registration fee
4. Complete your account setup

### 5.2 Create New App in Play Console

1. Click **Create app**
2. Enter app name: "Bethel Ministries"
3. Select **Android**
4. Accept declarations

### 5.3 Complete Store Listing

Fill out all required sections:

- **App details**
  - App name
  - Short description (80 chars max)
  - Full description (4000 chars max)
  - Category: Lifestyle or News & Magazines

- **Graphics**
  - App icon (512x512px, PNG)
  - Feature graphic (1024x500px, PNG)
  - Screenshots (minimum 2, up to 8)
  - Video promo (YouTube URL, optional)

- **Content rating**
  - Complete the content rating questionnaire
  - Get rating certificate

- **Privacy policy**
  - Add your privacy policy URL (required)

- **Target audience**
  - Select appropriate age groups

- **Release notes**
  - Add version-specific notes

### 5.4 Submit Internal Testing Release

1. Go to **Testing** → **Internal testing**
2. Click **Create new release**
3. Upload the AAB file
4. Add release notes
5. Review and start rollout

### 5.5 Submit to Production

Once internal testing is complete:

1. Go to **Production**
2. Click **Create new release**
3. Upload the AAB file
4. Add release notes
5. Set rollout percentage (typically 5%, 25%, 50%, 100%)
6. Submit for review

**Review time**: Usually 2-4 hours, up to 24 hours.

---

## Step 6: Build for iOS (Apple App Store)

### 6.1 Configure iOS Build

```bash
eas build --platform ios
```

EAS will prompt you to:
- Create an Apple Developer certificate
- Create a provisioning profile

### 6.2 Build iOS App

```bash
eas build --platform ios --auto-submit
```

Or build without auto-submit:

```bash
eas build --platform ios
```

This takes 20-40 minutes.

---

## Step 7: Publish to Apple App Store

### 7.1 Create Apple Developer Account

1. Visit https://developer.apple.com
2. Sign in with your Apple ID
3. Pay the $99 annual fee
4. Complete enrollment process (can take several days)

### 7.2 Create App in App Store Connect

1. Visit https://appstoreconnect.apple.com
2. Go to **My Apps**
3. Click **+ New App**
4. Select iOS
5. Fill in:
   - App name: "Bethel Ministries"
   - Primary language: English
   - Bundle ID: com.bethelministries.app
   - SKU: com.bethelministries.app (unique identifier)

### 7.3 Complete App Information

- **App details**
  - Subtitle
  - Privacy policy URL
  - Support URL
  - Marketing URL (optional)

- **Pricing and Availability**
  - Set to Free
  - Select regions for availability

### 7.4 Add Screenshots and Metadata

Under **App Store**:

- **iOS App**
  - Screenshots for different device types (iPhone, iPad)
  - Preview video (optional)
  - App icon (1024x1024px)
  - Description (up to 4000 chars)
  - Keywords (relevant search terms)
  - Support URL
  - Privacy policy URL
  - Promotional artwork (optional)

- **Build**
  - Select your iOS build from EAS
  - Add release notes

### 7.5 Complete Compliance & Licensing

- Answer questions about encryption, content, etc.
- Accept license agreements

### 7.6 Add TestFlight Testers (Optional)

Before submitting to App Review, you can invite testers:

1. Go to **TestFlight**
2. Add internal testers and external testers
3. Send invitation links
4. Gather feedback

### 7.7 Submit for Review

1. Go to **App Store**
2. Click **Prepare for Submission**
3. Review all information
4. Click **Submit for Review**

**Review time**: Usually 24-48 hours.

---

## Step 8: Post-Submission Checklist

### After Google Play Store Approval
- Monitor user reviews and ratings
- Track crash reports in Play Console
- Update app with bug fixes and features
- Release updates through staged rollouts

### After Apple App Store Approval
- Monitor user reviews and ratings
- Track crashes in Xcode Organizer
- Update app with bug fixes and features
- Release updates through App Store

---

## Continuous Updates & Versioning

### Incrementing Version Numbers

**For Android:**
- Update `versionCode` in `app.json` (increment by 1)
- Update `version` in `app.json` (semantic versioning, e.g., 1.0.1)

**For iOS:**
- Update `buildNumber` in `app.json`
- Update `version` in `app.json`

### Rebuild and Resubmit

```bash
# Increment version in app.json, then:
eas build --platform android --auto-submit
eas build --platform ios --auto-submit
```

---

## Troubleshooting

### Build Fails
- Check `.env` file for valid Firebase credentials
- Ensure `app.json` has all required fields
- Review EAS build logs: `eas build:view <BUILD_ID>`

### App Rejected by Store
- Review rejection reasons carefully
- Common issues: privacy policy, appropriate content rating
- Resubmit after fixing issues

### Version Already Exists
- Increment `versionCode` (Android) or `buildNumber` (iOS)
- Don't reuse version numbers

### Certificate/Provisioning Profile Expires
- Run `eas build --platform ios` to create new ones
- Apple certificates expire yearly

---

## Resources

- [Expo EAS Build Docs](https://docs.expo.dev/eas-update/build/)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [App Store Connect Help](https://help.apple.com/app-store-connect/)
- [Expo Deployment Guide](https://docs.expo.dev/deploy/submit-to-app-stores/)

---

## Important Notes

⚠️ **Security:**
- Never commit `.env` with real Firebase keys
- Use GitHub secrets for CI/CD
- Rotate credentials regularly

⚠️ **Compliance:**
- Ensure privacy policy complies with GDPR and local laws
- Review content ratings carefully
- Prayer data must be encrypted and private

⚠️ **Testing:**
- Always test on physical devices before submission
- Use TestFlight for iOS and internal testing for Android
- Test all features, especially payment flows if applicable
