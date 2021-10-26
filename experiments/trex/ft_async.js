"use strict";

var myGreeting = setTimeout(function sayHi() {
  return('Hello, Mr. Universe!');
}, 2000); // With a function defined separately

/*function sayHi() {
  return('Hello Mr. Universe!');
} //let myGreeting = setTimeout(sayHi, 2000);*/