const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultOutput = document.getElementById("output");

// Validating Number
function validateNumber(num) {
  if (!num) {
    resultOutput.classList.add("error");
    numberInput.classList.add("error");
    resultOutput.innerText = "Please enter a valid number";
    return false;
  } else if (num < 1) {
    resultOutput.classList.add("error");
    numberInput.classList.add("error");
    resultOutput.innerText = "Please enter a number greater than or equal to 1";
    return false;
  } else if (num > 3999) {
    resultOutput.classList.add("error");
    numberInput.classList.add("error");
    resultOutput.innerText = "Please enter a number less than or equal to 3999";
    return false;
  } else {
    resultOutput.classList?.remove("error");
    numberInput.classList?.remove("error");
    return true;
  }
}

// Converting user input to roman
function convertToRoman(num) {
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (let i in lookup) {
    while (num >= lookup[i]) {
      result += i;
      num -= lookup[i];
    }
  }

  return result;
}

// Updating output
function updateOutput() {
  let userValue = numberInput.value;

  if (!validateNumber(userValue)) {
    return;
  } else {
    resultOutput.textContent = convertToRoman(userValue);
  }
}

convertBtn.addEventListener("click", updateOutput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    updateOutput();
  }
});
