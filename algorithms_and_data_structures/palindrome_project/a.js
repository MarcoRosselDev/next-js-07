function isAPalindrome(str) {
  //remover todos los caracteres no alfaveticos para la comparacion
  const regex = /[A-Za-z]/gi;
  //i flag es para kaysensitive "sensivle a mayusculas"
  //str.replace(regex, "");
  //retorna +- y " " con "" vacio   /[+-\s]/g
  const lowerCase = str.toLowerCase();
  const lowerObj = lowerCase.match(regex, "")
  const lowerStr = lowerObj.toString();
  const match = lowerCase.match(regex);
  console.log(match);
  const arrayInvertido = match.reverse();
  const strReverse = arrayInvertido.toString()
  console.log(strReverse);
  if (strReverse === lowerStr) {
    console.log(`${str} es un palindromo`);
  } else {
    console.log(`${str} no es un palindromo`);
  }
  
  // 1.remover los caracteres no alfaveticos
  // 2.convertir el str en un array[]
  // 3.invertir el array
  // 4.convertir el array volteado en string
  // 5.comparar el string del paso 4 con el str del paso 1
  // 6.si es o no palindromo manipular el dom para enviar el mensaje
}

//isAPalindrome("marAsdfGG12--=  asdf!1");
isAPalindrome("marco");// passed "error esperado!"
isAPalindrome("mar----...123ram");// passed
//isAPalindrome("marram   ");