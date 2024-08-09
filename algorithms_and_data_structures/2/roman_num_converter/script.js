const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const outputDiv = document.getElementById("output_div");

const proto = (int) => {
  let arr = [];
  console.log(int);
  
  for (let i = 0; i < int.length; i++) {
    if (i === (int.length - 1)) {
      arr.push(int[i])
    } else {
      arr.push(int[i] + "0".repeat(int.length - 1 - i))
    }
  }
  console.log(arr);
  return arr
}

const roman = (arr) => {
  let n = ""
  const ArrRoman = ["", "I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
  const arrDecimal = [0, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  for (let i = 0; i < arr.length; i++) {
    const int = Number(arr[i])
    const f = arrDecimal.findIndex((e) => e === int);
    console.log(f);
    if (f !== -1) {
      n+= ArrRoman[f];
    } else {
      console.log(typeof Number(arr[i][0]), "asdf", Number(arr[i][0]));
      if (int === 0) {
        return
      } else if (int > 1 && int < 4) {
        n += "I".repeat(int)
      } else if (int > 5 && int < 9) {
        n += "V"+"I".repeat(int - 5);
      } else if (int >= 20 && int < 40) {
        n += "X".repeat(arr[i][0]);
      } else if (int >= 60 && int < 90) {
        n += "L"+ "X".repeat(Number(arr[i][0] - 5))
      } else if (int >= 200 && int < 400) {
        n += "C".repeat(arr[i][0])
      } else if (int >= 600 && int < 900) {
        n += "D"+"C".repeat(Number(arr[i][0]) - 5)
      } else if (int >= 2000 && int < 4000) {
        n += "M".repeat(Number(arr[i][0]))
      }
    }
  }
  return n
}

convertBtn.addEventListener("click", (e) => {
  
  e.preventDefault();
  const inputInt = Math.floor(number.value)
  console.log(inputInt);
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
    output.textContent = roman(proto(number.value));
  }
})