# make-sure
Are you tired of those huge fucking validation libs that have thousands of features you don't give a shot about? Is 97% of your validation just about avoiding undefined?

I got you covered my friend!
```
let makeSure = require('msjs');
let theobject = undefined
makeSure(theobject).has('aproperty')
// [ '{} is undefined' ]
```
If it doesn't, you'll find out by checking the contents of the .errors-array on the return object of makeSure().

Nested objects? I THOUGHT YOU'D NEVER ASK!

```
makeSure(theobject).has('aproperty', aproperty => aproperty.has('afriend').has('twofriends'))
```
