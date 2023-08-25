// Business Logic

function beepBoop(num) {
    const arr = [];
    const inputNum = parseInt(num);

    if (inputNum > 0) {
      for (let i=0; i<=inputNum; i++) {
        let iStr = i.toString();
        if (iStr.includes("3")) {
          arr.push(" Won't you be my neighbor?");
        } else if (iStr.includes("2")) {
          arr.push(" Boop!");
        } else if (iStr.includes("1")) {
          arr.push(" Beep!");
        } else {
          (arr.push(" " + i));
        }
      }
    } else if (inputNum < 0){
      for (let i=0; i>=inputNum; i--) {
        let iStr = i.toString();
        if (iStr.includes("3")) {
          arr.push(" Won't you be my neighbor?");
        } else if (iStr.includes("2")) {
          arr.push(" Boop!");
        } else if (iStr.includes("1")) {
          arr.push(" Beep!");
        } else {
          (arr.push(i));
        }
      } 
    } else {
      arr.push("Error Human, please enter a non-zero number. Resistance is futile");
    }
      const result = arr.toString(" ");
      return result;
}

//UI Logic
window.addEventListener("load", function() {
  const form = document.getElementById("form");
  document.getElementById("output").setAttribute("class", "hidden"); 
  form.addEventListener("submit", handleSubmission); 
});

function handleSubmission(event) {
  event.preventDefault();
  let num1 = document.getElementById("q1").value;
  let myReturn = beepBoop(num1);  
  document.getElementById("output").removeAttribute("class");
  document.getElementById("output").innerText = myReturn;
  document.getElementById("form").reset();
}
