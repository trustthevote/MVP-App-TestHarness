# MVP-App-TestHarness

A simple app that shows the endpoint of the workflow of the future ABC app.
To run the current version of this app

Android: Only an Android build can be directly downloaded from this project. The .apk is located in /build/android/

PWA (Progress Web app): It must be hosted on a website and the URL is http://abcbe-mvp-test-harness.s3-website-us-east-1.amazonaws.com/

iOS: Apple requires notarization. During development, each iOS revision is notarized and distributed via TestFlight.

## Standardization and Quality Checks

### Linting

### Formatting

This repo uses [Prettier](https://prettier.io/) to ensure standardized formatting rules across the entire codebase.

It's generally a good idea to configure your IDE to format whenever you make a change to a file. If you're using VS Code, you should install the [Prettier extention](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and enable [format on save](https://code.visualstudio.com/updates/v1_6#_format-on-save).

As an additional check, Prettier will run automatically as a pre-commit hook anytime you attempt to make a commit. Any files you have changed will be auto-formatted and added to your commit.

If you want to run Prettier manually, you can run one of the following:

```bash
npm run format:write # writes all formatting changes to disk
npm run format:write # will fail if more than one file is improperly formatted
```

### Unit testing
