var angleBetweenPoints = require('./');
var angle = angleBetweenPoints(
  {x: process.argv[2], y: process.argv[3]},
  {x: process.argv[4], y: process.argv[5]}
);
process.stdout.write(angle + '\n');
