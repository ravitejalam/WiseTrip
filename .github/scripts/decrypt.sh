#!/bin/sh

# Decrypt the file

# --batch to prevent interactive command --yes to assume "yes" for questions

# release.keystore
gpg --quiet --batch --yes --decrypt --passphrase="$PASS" \
--output android/app/release.keystore android/app/release.keystore.gpg

# google-services.json
gpg --quiet --batch --yes --decrypt --passphrase="$PASS" \
--output android/app/google-services.json android/app/google-services.json.gpg
