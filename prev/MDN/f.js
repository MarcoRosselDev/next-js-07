/* const isSpam = (msg = false) =>{
  return msg;
};
console.log(isSpam()); */

const helpRegex = /please help/

console.log(helpRegex.test("me gusta la coca cola, please help, nesecito ayuda")); // true
