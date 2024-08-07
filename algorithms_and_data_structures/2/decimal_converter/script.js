const callStack = [];
const a = () => {
  return "freeCodeCamp " + b();
}
const b = () => {
  return "is " + c();
}
const c = () => {
  return "awesome!";
}
console.log(a());

/* Step 47
In computer science, a stack is a data structure where items are stored in a LIFO (last-in-first-out) manner. If you imagine a stack of books, the last book you add to the stack is the first book you can take off the stack. Or an array where you can only .push() and .pop() elements.

The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top of the stack, and when it returns, it is removed from the top / end of the stack.

You'll see this in action by creating mock call stack.

Initialize a variable named callStack and assign it an empty array. */
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
  if (input === 0) {
    binary = "0";
    return;
  }
  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input /2);
  }
  result.innerText = binary;
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