[![Build Status](https://travis-ci.org/fsngx/ease.svg?branch=master)](https://travis-ci.org/fsngx/ease)
[![Coverage Status](https://coveralls.io/repos/github/fsngx/ease/badge.svg?branch=master)](https://coveralls.io/github/fsngx/ease?branch=master)

# @fsngx/ease

Animation easing functions written typescript.

## Installation 
```sh
npm i @fsngx/ease
```

Now open `localhost:8080` and the typedoc can be seen.

## Usage

### TypeScript
```typescript
import { Ease } from '@fsngx/ease';
let result:number = Ease.linearEase(10,10,100,100);
console.log("The linear ease value is: ", result);
```

### Javascript
```javascript
let Ease = require('@fsngx/ease').Ease;
let result:number = Ease.linearEase(10,10,100,100);
console.log("The linear ease value is: ", result);
```

## Test 
```sh
npm run test
```

## Typedoc

From the root project directory run `typedoc` to generate the code documenation

``` sh
npm i
npm run doc
npm i -g http-server
http-server doc
```