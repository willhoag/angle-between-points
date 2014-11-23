'use strict'

var rad2deg = require('compute-rad2deg');

module.exports = function (p1, p2) {
    var angle = rad2deg( Math.atan2( p2.y - p1.y, p2.x - p1.x ) );
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
