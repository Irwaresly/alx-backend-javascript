# ALX Backend JavaScript - Unit Tests

## Project Overview

This project involves creating and running unit tests for JavaScript code using various libraries such as Mocha, Chai, and Sinon. The goal is to learn how to write comprehensive test suites, use assertion libraries, manage spies and stubs, and perform both unit and integration testing.

## Learning Objectives

By the end of this project, you should be able to:

1. Use Mocha to write test suites.
2. Use different assertion libraries like Node's built-in assert and Chai.
3. Present long test suites effectively.
4. Utilize spies and stubs for testing.
5. Understand hooks and their usage in tests.
6. Perform unit testing with asynchronous functions.
7. Write integration tests for a small Node server.

## Requirements

- **Environment:** Ubuntu 18.04 with Node 12.x.x.
- **Editors:** vi, vim, emacs, Visual Studio Code.
- **File Naming:** All files should end with a new line.
- **README:** A README.md file at the root of the project directory is mandatory.
- **File Extension:** Use the `.js` extension for JavaScript files.
- **Test Execution:** All tests should pass without warnings when running `npm test *.test.js`.

## Tasks

### 0. Basic Test with Mocha and Node Assertion Library
- **Install Mocha** and set up scripts in `package.json` to run Mocha using `npm test`.
- **Implement Function:** Create `calculateNumber` that rounds two numbers and returns their sum.
- **Test Cases:** Write tests in `0-calcul.test.js` to cover the rounding logic and edge cases.

### 1. Combining Descriptions
- **Enhance Function:** Add a `type` argument to `calculateNumber` to support SUM, SUBTRACT, and DIVIDE operations.
- **Test Cases:** Use `describe` to organize tests in `1-calcul.test.js`.

### 2. Basic Test Using Chai Assertion Library
- **Convert Tests:** Copy `1-calcul.js` to `2-calcul_chai.js` and `1-calcul.test.js` to `2-calcul_chai.test.js`.
- **Rewrite Tests:** Use Chai's `expect` to rewrite the test suite.

### 3. Spies
- **Install Sinon** and create a module `Utils` with the `calculateNumber` function.
- **New Function:** Create `sendPaymentRequestToApi` that calls `Utils.calculateNumber`.
- **Test Cases:** Use `sinon.spy` to validate the function call in `3-payment.test.js`.

### 4. Stubs
- **Stub Implementation:** Copy `3-payment.js` to `4-payment.js` and `3-payment.test.js` to `4-payment.test.js`.
- **Stub Function:** Use `sinon.stub` to return a fixed value and verify it.

### 5. Hooks
- **Set Up Hooks:** Use `beforeEach` and `afterEach` hooks in `5-payment.test.js`.
- **Test Cases:** Verify console logs for `sendPaymentRequestToAPI`.

### 6. Async Tests with Done
- **Async Function:** Create `getPaymentTokenFromAPI` to return a promise based on a boolean argument.
- **Test Cases:** Use the `done` callback to handle asynchronous tests in `6-payment_token.test.js`.

### 7. Skip
- **Skipping Tests:** Use `it.skip` to skip failing tests in `7-skip.test.js`.

### 8. Basic Integration Testing
- **Express Server:** Create an Express app in `api.js` that listens on port 7865.
- **Test Cases:** Write integration tests for the index route in `api.test.js`.

### 9. Regex Integration Testing
- **New Endpoint:** Add `GET /cart/:id` in `api.js` with validation.
- **Test Cases:** Validate correct and incorrect IDs in `api.test.js`.

### 10. Deep Equality & POST Integration Testing
- **New Endpoints:** Add `GET /available_payments` and `POST /login` in `api.js`.
- **Test Cases:** Write tests for these endpoints in `api.test.js`.

## Repository Structure

- **GitHub Repository:** `alx-backend-javascript`
- **Project Directory:** `0x06-unittests_in_js`

### Files

- **Configuration and Test Files:** `package.json`, test files for each task.
- **JavaScript Implementation Files:** `0-calcul.js`, `1-calcul.js`, `2-calcul_chai.js`, `utils.js`, `3-payment.js`, `4-payment.js`, `5-payment.js`, `6-payment_token.js`, `8-api/api.js`, `9-api/api.js`, `10-api/api.js`.
