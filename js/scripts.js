// Business Logic

const num = document.querySelector("input")

function beepBoop(num) {
  const arr = [];
  const inputNum = parseInt(num);
  console.log(typeof(inputNum));
  if (inputNum > 0) {
    for (let i=0; i<=inputNum; i++) {
      let iStr = i.toString();
      if (iStr.includes("3")) {
        arr.push("Won't you be my neighbor?");
      } else if (iStr.includes("2")) {
        arr.push("Boop");
      } else if (iStr.includes("1")) {
        arr.push("Beep");
      } else {
        (arr.push(i));
      }
    }
  } else if (inputNum < 0){
    for (let i=0; i>=inputNum; i--) {
      let iStr = i.toString();
      if (iStr.includes("3")) {
        arr.push("Won't you be my neighbor?");
      } else if (iStr.includes("2")) {
        arr.push("Boop");
      } else if (iStr.includes("1")) {
        arr.push("Beep");
      } else {
        (arr.push(i));
      }
    }
  }
  
  const result = arr.toString(" ");
  console.log(result);
  document.querySelector(".hidden").removeAttribute("class");
  document.getElementById("output").innerText = result;
  // document.getElementById("form").reset();
}




//UI Logic
window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleSubmission); 
});

function handleSubmission(event) {
  event.preventDefault();
  document.getElementById("output").setAttribute("class", "hidden");
}

