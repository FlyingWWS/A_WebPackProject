require('./exa.less');

document.write("<h1> Less </h1>");

// var exa = {};

// exa.sayHello = function(){
// 	alert("hello");
// }

// module.exports = exa;
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}