const textIntup = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function alertEmtyInput() {
  if (textIntup.value.lenth <= 0) {
    //Window.alert("message") ---> es lo mismo pero el Window no es necesario
    alert("Please input a value");
  }
}

// antes de seguir tomar un curso de regex para limpiar el input tipo string
function isAPalindrome(str) {
  //remover todos los caracteres no alfaveticos para la comparacion
  const regex = /a[a-b]g/;
  // 1.remover los caracteres no alfaveticos
  // 2.convertir el str en un array[]
  // 3.invertir el array
  // 4.convertir el array volteado en string
  // 5.comparar el string del paso 4 con el str del paso 1
  // 6.si es o no palindromo manipular el dom para enviar el mensaje
}