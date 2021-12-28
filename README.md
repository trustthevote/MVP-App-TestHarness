# MVP-App-TestHarness

- [Development workflow](#development-workflow)
- [Standardization and Quality Checks](#standardization-and-quality-checks)
  - [Linting](#linting)
  - [Formatting](#formatting)
  - [Unit testing](#unit-testing)
  - [E2E testing](#e2e-testing)
- [Using local storage](#using-local-storage)

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

### What to do when your PR shows a failing status check

In the event that your PR fails one or more quality gates, GitHub will show "Merging is blocked" on your PR, and you will see a red X next to the failing status check.

In order to resolve the failing status check, you'll need to do the following:

1. Determine the cause of the issue
2. Reproduce it locally
3. Implement, commit, and push a fix

Once the fix is pushed, GitHub Actions will run again and will re-check your latest code. If everything is successful, it will pass and you're clear to merge as long as the other requirements are met. If it fails again, you'll need to go through the same actions above to see what other errors were found.

So, how do you find out what the problem is? First, click on the "Details" button next to the failing status check. This will take you to the GitHub Actions page, and you'll see what quality gate failed.

Below are some common examples:

#### Formatting issues

If formatting fails, you might see something like the following:

```bash
[warn] Code style issues found in the above file(s). Forgot to run Prettier?
Error: Process completed with exit code 1.
```

You'll need reproduce the error locally using the instructions found here under the [Formatting](#formatting) section. Then implement, commit, and push a fix, and confirm that the next run completes successfully.

#### Linting issues

If linting fails, you might see something like the following:

```bash
Lint errors found in the listed files.

...

✖ X problems (X errors, 0 warnings)
  Y errors and 0 warnings potentially fixable with the `--fix` option.
```

You'll need reproduce the error locally using the instructions found here under the [Linting](#linting) section. Then implement, commit, and push a fix, and confirm that the next run completes successfully.

#### Unit testing issues

There are several possible ways that testing could fail.

Tests may not complete successfully. You'll know this is the case if not all tests succeed, which should be evident in the logs. You'll need to reproduce locally using the instructions found here under the [Unit testing](#unit-testing) section. Then implement, commit, and push a fix, and confirm that the next run completes successfully.

Alternatively, test may all complete successfully, but may be below the coverage threshold. This may happen if you have added code, but did not add tests to cover that code. You'll know this is the case if you see one or more of the following in the logs:

```bash
Coverage for statements (X%) does not meet global threshold (Y%)
Coverage for branches (X%) does not meet global threshold (Y%)
Coverage for lines (X%) does not meet global threshold (Y%)
Coverage for functions (X%) does not meet global threshold (Y%)
```

Why would these errors happen even if all tests are passing? Well, these thresholds will cause the overall test operation to fail if the converge drops below it. Thresholds confirm a certain level of quality and ensure the code is properly covered.

If this happens to you, you have two options:

1. You'll need to implement tests to cover the new code that you added
2. If this is not possible, then you'll need to adjust the thresholds. To do this, adjust the numerical thresholds in the [`karma.conf.js`](./karma.conf.js) config file, which correspond to the percentages you see in your error message. Once you adjust the thresholds so that they're less than or equal to the coverage in your branch, then the test operation should pass.

Either way, you should then commit and push the fix, and confirm that the next run completes successfully.

#### E2E testing issues

Given that the UI tests are based on HTML selectors and expected text, it's possible that changing either of those may cause the e2e smoke tests to fail.

You'll need reproduce the error locally using the instructions found here under the [E2E testing](#e2e-testing) section. Then implement, commit, and push a fix, and confirm that the next run completes successfully.

## Standardization and Quality Checks

### Linting

This repo uses [ESlint](https://eslint.org/) to detect and prevent potential issues using static analysis.

ESlint will run automatically as a pre-commit hook anytime you attempt to make a commit. If it detects any problems, it will prevent the commit and alert you to the issue. Once remediated, you should be able to commit cleanly.

To run ESlint manually, execute the following:

```bash
npm run lint
```

To attempt to fix some of these issues automatically (not all issues can be fixed this way; most will require manual interaction), execute the following:

```bash
npm run lint -- --fix
```

### Formatting

This repo uses [Prettier](https://prettier.io/) to ensure standardized formatting rules across the entire codebase.

It's generally a good idea to configure your IDE to format whenever you make a change to a file. If you're using VS Code, you should install the [Prettier extention](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and enable [format on save](https://code.visualstudio.com/updates/v1_6#_format-on-save).

As an additional check, Prettier will run automatically as a pre-commit hook anytime you attempt to make a commit. Any files you have changed will be auto-formatted and added to your commit.

To run Prettier manually, execute the following:

```bash
npm run format:write # writes all formatting changes to disk
npm run format:check # will fail if more than one file is improperly formatted
```

### Unit testing

This repo uses [Karma](https://angular.io/guide/testing) for unit testing.

To run unit tests manually, execute the following:

```bash
npm run test
```

Unit tests will fail if any tests fail, or if code coverage drops below the enforced thresholds. Generally, ideal code coverage levels (for statements/branches/functions/lines) would be around 80%; however, this repo has been set to

To view detailed coverage reports, run the unit tests and then load `./coverage/index.html` in a web browser. This will allow you to view specific coverage information for any file in the repo.

### E2E testing

This repo uses [Cypress](https://www.cypress.io/) for E2E testing.

To run e2e tests manually, execute the following:

```bash
npm run e2e
```

## Using local storage

Given that `localStorage` is a globally available object, using it directly introduces the possibility of scope bleed during test execution. As an example, test 1 may configure the local storage with some specific state, which it might require during its execution. Later on, test 2 may run some code which unintentionally relies on the local storage state set by test 1. So if test 1 is removed (or if test 2 executes before test 1), then test 2 will fail.

A better approach is to use a [`LocalStorageRef` service](https://github.com/trustthevote/MVP-App-TestHarness/blob/main/src/app/class/local-storage-ref/local-storage-ref.service.ts), which wraps `localStorage` and provides it upon request. In tests, a [`LocalStorageRefStub` class](https://github.com/trustthevote/MVP-App-TestHarness/blob/main/src/app/class/local-storage-ref/local-storage-ref.stub.ts) can be provided in tests' `TestBed` configurations, which allows the test to configure local storage in a way that's scoped to that single test.

This application currently uses local storage for only one thing: storing user information. To facilitate simple and consistent user state management, we use a [`UserService` class](https://github.com/trustthevote/MVP-App-TestHarness/blob/main/src/app/class/user/user.service.ts) for setting/retrieving/clearing user state. In tests, [a `UserServiceStub` class](https://github.com/trustthevote/MVP-App-TestHarness/blob/main/src/app/class/user/user.service.stub.ts) can be provided in tests' `TestBed` configurations, which allows the test to configure user state in a way that's scoped to that single test.

Here's an example of a "page" class using the `UserService` class to get the user's last name:

```ts
  constructor(private userService: UserService) {
    ...
  }

  foo() {
      const const lastName = this.userService.getUser().lastName;
  }
```

And in that "page" class's tests, here's an example of how you might condition the data in a `beforeEach`:

```ts
beforeEach(
  waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FooPage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: UserService, useClass: UserServiceStub }],
    }).compileComponents();

    userService = TestBed.inject(UserService);
    userService.upsertUser({ lastName: 'foo' });

    fixture = TestBed.createComponent(FooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
);
```
