/**
 * Created by himalayj on 7/9/17.
 */
"use strict";

// Use strict mode does not allow undeclared variables.

b();
console.log(a); // Will result in undefined & not error
//console.log(c); // will result in error

var a = 10;

// Accessing values using ${} or $placeHolders.
function b() {
    console.log(`value of a is ${a}`);
}
