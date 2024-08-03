const textIntup = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

// antes de seguir tomar un curso de regex para limpiar el input tipo string
function isAPalindrome(str) {
  if (textIntup.value <= 0) {
    alert("Please input a value");
  }
  // 1.remover los caracteres no alfaveticos
  const regex = /[A-Za-z0-9]/gi;
  // 2.convertir el str en un array[]
  const match = str.match(regex);// devuelve un objeto con solo letras
  const matchLower = match.toString().toLowerCase();
  // 3.invertir el array
  // 4.convertir el array volteado en string
  const matchInvertedLower = match.reverse().toString().toLowerCase();
  // 5.comparar el string del paso 4 con el str del paso 1
  if (matchInvertedLower === matchLower) {
    // 6.si es o no palindromo manipular el dom para enviar el mensaje
    resultDiv.innerHTML = `
    <p><span>${str}</span> is a palindrome.</p>
    `
  } else {
    resultDiv.innerHTML = `
    <p><span>${str}</span> is not a palindrome.</p>
    `
  }
}
//isAPalindrome("marAsdfGG12--=  asdf!1");

checkButton.addEventListener("click", (e) =>{
  e.preventDefault();
  isAPalindrome(textIntup.value)
})