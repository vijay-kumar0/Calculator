let current = "";

function append(value) {
  current += value;
  document.getElementById("result").innerText = current;
}

function clearDisplay() {
  current = "";
  document.getElementById("result").innerText = "0";
  document.getElementById("history").innerText = "";
}

function calculate() {
  try {
    let answer = eval(current);
    document.getElementById("history").innerText = current + " =";
    document.getElementById("result").innerText = answer;
    current = answer.toString();
  } catch {
    document.getElementById("result").innerText = "Error";
    current = "";
  }
}