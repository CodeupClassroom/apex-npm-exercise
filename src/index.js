const $ = require('jquery');
// connect the keys file into this js file
const keys = require("./keys");

console.log(keys);

const person = { firstname: 'douglas' };
const { firstname } = person;
const sayHello = (person) => `Hello ${person.firstname}.`;

console.log(sayHello(person));

$(document).ready(()=>{
    $('body').html(sayHello(person));

});