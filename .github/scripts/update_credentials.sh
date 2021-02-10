#!/bin/sh

# Update the project credentials from github secrets

sed s/MAPS_SDK_API_KEY/"$MAPS_SDK_API_KEY"/g android/app/src/main/AndroidManifest.xml
sed s/GOOGLE_SIGN_IN_WEB_CLIENT_ID/"$GOOGLE_SIGN_IN_WEB_CLIENT_ID"/g screens/SignInScreen/index.js screens/SignUpScreen/index.js
sed s/RELEASE_KEYSTORE_PASSPHRASE/"$RELEASE_KEYSTORE_PASSPHRASE"/g android/app/build.gradle
