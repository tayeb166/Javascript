// Current temparture in kelvin degrees
const kelvin = 293;
// Converting kelving to clevius
const celsius = kelvin - 273;
// COnvert celsuis to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//ROund down fahreint variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temprature ${fahrenheit} degrees Fahrenheit.`)