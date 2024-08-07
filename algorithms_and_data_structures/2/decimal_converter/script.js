const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  /* const inputs = [];
  const quotients = [];
  const remainders = [];
  if (input === 0) {
    result.innerText = "0";
    return;
  }
  while ( input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }
  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
  result.innerText = remainders.reverse().join(""); */
  // logica más eficiente.
  let binary = "";
};

const checkUserInput = () =>{
  if (!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value)< 0) {
    alert("Please provide a decimal number greater than or equal to 0")
    return
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

/* 
| Base-10 | Base-2 |
| ------- | ------ |
|    0    |  0     |
|    1    |  1     |
|    2    |  10    |
|    3    |  11    |
|    4    |  100   |
|    5    |  101   |
|    6    |  110   |
|    7    |  111   |
|    8    |  1000  |
|    9    |  1001  | 

128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 -----> sumar la posicion del indice da el numero decimal
118 en binario = 01110110 = byte = 8-bit
*/