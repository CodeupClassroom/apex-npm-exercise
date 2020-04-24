const $ = require('jquery');

const person = { firstname: 'douglas' };
const { firstname } = person;
const sayHello = (person) => `Hello ${person.firstname}.`;

console.log(sayHello(person));

$(document).ready(()=>{
    $('body').html(sayHello(person));
});