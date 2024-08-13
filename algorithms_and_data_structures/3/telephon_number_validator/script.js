//const regex = /1?\s?\(?[0-9][0-9][0-9]\)?-?\s?[0-9][0-9][0-9]\s?-?[0-9][0-9][0-9][0-9]/gi; // este es el unico formato asepatado
const a = "(1\s)?";
const b = "(\([0-9][0-9][0-9]\)|[0-9][0-9][0-9])";
const dashSpace = "([\s-]?)";
const c = "([0-9][0-9][0-9])"
const d = "([0-9][0-9][0-9][0-9])"
//const finalRegex = /`${a}${b}${dashSpace}${c}${dashSpace}${d}`/g;
//const finalRegex = /^(1\s)?(\([0-9][0-9][0-9]\)|[0-9][0-9][0-9])([\s-]?)([0-9][0-9][0-9])([\s-]?)([0-9][0-9][0-9])([\s-]?)([0-9][0-9][0-9][0-9])$/;
const finalRegex = /^(1\s)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
console.log(finalRegex);

const testa = str => finalRegex.test(str)

console.log(testa("1 555-555-5555"));