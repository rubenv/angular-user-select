# angular-user-select

> Disable user selection dynamically.

[![Build Status](https://travis-ci.org/rubenv/angular-user-select.png?branch=master)](https://travis-ci.org/rubenv/angular-user-select)

This module provides a service to disable selection on pages dynamically.
You'll need this if you're adding drag/drop interactions or lasso selections.

## Installation
Add angular-user-select to your project:

```
bower install --save angular-user-select
```

Add it to your HTML file:

```html
<script src="bower_components/angular-user-select/dist/angular-user-select.min.js"></script>
```

Reference it as a dependency for your app module:

```js
angular.module('myApp', ['rt.userselect']);
```

## Usage

Put the directive on the container where selection should be disabled:

```html
<body user-select>
    <!-- Your app here -->
</body>
```

Inject it as a service to control it:

```js
angular.module('myApp').controller('TestCtrl', function ($scope, userSelect) {
    // Disable selection
    userSelect.disable();

    // Enable it again
    userSelect.enable();
});
```

## License 

    (The MIT License)

    Copyright (C) 2014 by Ruben Vermeersch <ruben@rocketeer.be>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
