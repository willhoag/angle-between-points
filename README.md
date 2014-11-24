angle-between-points
=====

[![NPM](https://nodei.co/npm/angle-between-points.png)](https://nodei.co/npm/angle-between-points/)

Given two points, it returns the angle in degrees from one to the other.

EXAMPLE
====

`angleBetweenPoints(point1, point2)`
---

```js
var angleBetweenPoints = require('angle-between-points');

angleBetweenPoints( {x: 1, y: 1}, {x: 4, y: 4} );
// returns 45

angleBetweenPoints( {x: 2, y: 2}, {x: -4, y: -4} );
// returns 225

angleBetweenPoints( {x: 2, y: 0}, {x: -4, y: 0} );
// returns 180
```

INSTALLATION
===
`$ npm install angle-between-points`
---

LICENSE
=======

MIT
