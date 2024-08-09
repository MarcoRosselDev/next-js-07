const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const outputDiv = document.getElementById("output_div");

const roman = (int) => {
  const ArrRoman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
  const arrDecimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  if (int === 0) {
    return
  } else {
    return ArrRoman[arrDecimal.findIndex(n => n === int)]
  }
}
const desestructuracion = (num) => {
  if (num.length === 1) {
    return roman(num)
  } else if (condition) {
    
  }
}

convertBtn.addEventListener("click", (e) => {
  const inputInt = Math.floor(number.value)
  e.preventDefault();
  if ( number.value.length === 0) {
    outputDiv.classList.remove("hidden");
    outputDiv.classList.remove("output_plus");
    outputDiv.classList.add("output_red");
    output.textContent = "Please enter a valid number";
  } else if (inputInt <= 0) {
    outputDiv.classList.remove("hidden");
    outputDiv.classList.remove("output_plus");
    outputDiv.classList.add("output_red");
    output.textContent = "Please enter a number greater than or equal to 1.";
  } else if (inputInt >= 4000) {
    outputDiv.classList.remove("hidden");
    outputDiv.classList.remove("output_plus");
    outputDiv.classList.add("output_red");
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    outputDiv.classList.remove("hidden");
    outputDiv.classList.remove("output_red");
    outputDiv.classList.add("output_plus");
    output.textContent = number.value;
  }
})