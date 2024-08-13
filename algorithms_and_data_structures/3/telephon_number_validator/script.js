/* //const regex = /(1\s)?\(?[0-9][0-9][0-9]\)?-?\s?[0-9][0-9][0-9]\s?-?[0-9][0-9][0-9][0-9]/gi; // este es el unico formato asepatado
const a = "(1\s)?";
const b = "(\([0-9][0-9][0-9]\)|[0-9][0-9][0-9])";
const dashSpace = "([\s-]?)";
const c = "([0-9][0-9][0-9])"
const d = "([0-9][0-9][0-9][0-9])"
//const finalRegex = /`${a}${b}${dashSpace}${c}${dashSpace}${d}`/g;
//const finalRegex = /^(1\s)?(\([0-9][0-9][0-9]\)|[0-9][0-9][0-9])([\s-]?)([0-9][0-9][0-9])([\s-]?)([0-9][0-9][0-9])([\s-]?)([0-9][0-9][0-9][0-9])$/; */
const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const regex = /^(1\s|1)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

const testInput = str => regex.test(str)

//console.log(testInput("1 555-555-5555"));
function newElement(str) {
  const el = document.createElement("p");
  el.textContent = str;
  input.value = "";
  resultsDiv.appendChild(el);
}

checkBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value.length === 0) {
    alert("Please provide a phone number")
  } else {
    //testInput(input.value) ? console.log(`numero valido: ${input.value}`) : console.log(`numero invalido: ${input.value}`);
    testInput(input.value) ? newElement(`Valid US number: ${input.value}`) : newElement(`Invalid US number: ${input.value}`);
    // manipular el dom para insertar el mensaje deseado
  }
})

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  resultsDiv.innerHTML = "";
})

/* <main>
    <h3>Enter a Phone Number:</h3>
    <input type="text" id="user-input">
    <div id="results-div">

    </div>
    <button id="check-btn">Check</button>
    <button id="clear-btn">Clear</button>
  </main> */