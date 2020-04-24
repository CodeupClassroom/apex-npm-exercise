// brings a npm library
const $ = require('jquery');
// connect the keys local file into this js file
const keys = require("./keys");

// connect the math.js file with this procedure
import ferMath from './math';

console.log(keys);

const person = { firstname: 'douglas' };
const { firstname } = person;
const sayHello = (person) => `Hello ${person.firstname}.`;

console.log(sayHello(person));

$(document).ready(()=>{
    $('body').html(sayHello(person));

    console.log('math.add',ferMath.add(5, 8));
    console.log('math.divide',ferMath.divide(50, 10));

});