// sintaxis
var a = new Number("123"); // = objeto | instanceof Number == true | = [Number: 123]
var b = Number("123");  // = number | instanceof Number = false | = 123
// Descripcion
console.log(Number("unicornio")); // NaN = not a number
console.log(Number(undefined)); // NaN
console.log(Number("1234")); // 1234 "type number"