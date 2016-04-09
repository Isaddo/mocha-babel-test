# mocha-babel-test

Using `mocha` and `babel-core/register` running ES6 tests.
Chinese charactors will cause error when compile without cache.

## Reproduce Steps

* `npm install`

* `npm test`

First time run the test, we will get `ReferenceError: recursiveFunc is not defined`

* then `npm test`

the test will pass.

* if we run `npm run test-no-cache`

The error will appear again.

But, if we delete the comment "`//要瘋了`", first line at `index.js`

* `npm run test-no-cache`

the test will pass

and if we change the method of recursive function delcare from

`var recursiveFunc = function () { ... }`

to

`function recursiveFunc () { ... }`

This error will not appear
