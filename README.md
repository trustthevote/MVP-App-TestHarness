# MVP-App-TestHarness

A simple app that shows the endpoint of the workflow of the future ABC app.
To run the current version of this app

Android: Only an Android build can be directly downloaded from this project. The .apk is located in /build/android/

PWA (Progress Web app): It must be hosted on a website and the URL is http://abcbe-mvp-test-harness.s3-website-us-east-1.amazonaws.com/

iOS: Apple requires notarization. During development, each iOS revision is notarized and distributed via TestFlight.

## Development workflow

To ensure a standardized development workflow, all new changes must be added as Pull Requests. In order to be merged to the main branch, PRs must be:

1. Passing all status checks (there are implemented using GitHub Actions)
2. Up to date with the main branch
3. Approved by at least one other person

When merging, the "squash and merge" strategy is used, which ensures all commits in the feature branch have been squashed to a single commit. This keeps the main branch's commit logs clean and readable.

## Standardization and Quality Checks

### Linting

This repo uses [ESlint](https://eslint.org/) to detect and prevent potential issues using static analysis.

ESlint will run automatically as a pre-commit hook anytime you attempt to make a commit. If it detects any problems, it will prevent the commit and alert you to the issue. Once remediated, you should be able to commit cleanly.

To run ESlint manually, execute the following:

```bash
npm run lint
```

### Formatting

This repo uses [Prettier](https://prettier.io/) to ensure standardized formatting rules across the entire codebase.

It's generally a good idea to configure your IDE to format whenever you make a change to a file. If you're using VS Code, you should install the [Prettier extention](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and enable [format on save](https://code.visualstudio.com/updates/v1_6#_format-on-save).

As an additional check, Prettier will run automatically as a pre-commit hook anytime you attempt to make a commit. Any files you have changed will be auto-formatted and added to your commit.

To run Prettier manually, execute the following:

```bash
npm run format:write # writes all formatting changes to disk
npm run format:write # will fail if more than one file is improperly formatted
```

### Unit testing

This repo uses [Karma](https://angular.io/guide/testing) for unit testing.

To run unit tests manually, execute the following:

```bash
npm run test
```

Unit tests will fail if any tests fail, or if code coverage drops below the enforced thresholds. Generally, ideal code coverage levels (for statements/branches/functions/lines) would be around 80%; however, this repo has been set to

To view detailed coverage reports, run the unit tests and then load `./coverage/index.html` in a web browser. This will allow you to view specific coverage information for any file in the repo.

### Integration testing

This repo uses [Cypress](https://www.cypress.io/) for integration testing.

To run integration tests manually, have the development server running (`npm run start`), then execute the following:

```bash
npm run e2e
```

## Using local storage

Given that `localStorage` is a globally available object, using it directly introduces the possibility of scope bleed during test execution. As an example, test 1 may configure the local storage with some specific state, which it might require during its execution. Later on, test 2 may run some code which unintentionally relies on the local storage state set by test 1. So if test 1 is removed (or if test 2 executes before test 1), then test 2 will fail.

A better approach is to use a [`LocalStorageRef` service](https://github.com/trustthevote/MVP-App-TestHarness/blob/main/src/app/class/local-storage-ref/local-storage-ref.service.ts), which wraps `localStorage` and provides it upon request. In tests, a [`LocalStorageRefStub` class](https://github.com/trustthevote/MVP-App-TestHarness/blob/main/src/app/class/local-storage-ref/local-storage-ref.stub.ts) can be provided in tests' `TestBed` configurations, which allows the test to configure local storage in a way that's scoped to that single test.

This application currently uses local storage for only one thing: storing user information. To facilitate simple and consistent user state management, we use a [`UserService` class](https://github.com/trustthevote/MVP-App-TestHarness/blob/main/src/app/class/user/user.service.ts) for setting/retrieving/clearing user state. In tests, [a `UserServiceStub` class](https://github.com/trustthevote/MVP-App-TestHarness/blob/main/src/app/class/user/user.service.stub.ts) can be provided in tests' `TestBed` configurations, which allows the test to configure user state in a way that's scoped to that single test.
