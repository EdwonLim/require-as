## Require-AS

Alias Require

### Install

> npm install require-rs

### Require

> var alias = require('require-rs');

### Define

`code`:

```js
    alias.define('common', './common');
    alias.define({
        'common': './common'
    })
```

`config(package.json)`:

```json
    {
        "alias": {
            "common": "./common"
        }
    }

```

### Use

```js
    var test1 = alias.require('common/test.js');
    var test2 = require(alias('common/test.js'));

```
