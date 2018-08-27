#!/usr/bin/env bash
if [ -z $TRAVIS_TAG ]; then
    echo "Not a tagged release, generating commit version for @next build"
    node ./scripts/generateCommitVersion.js
    cat dist/ng-bootstrap-form-validation/package.json
fi
