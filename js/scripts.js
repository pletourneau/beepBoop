// Business Logic

function beepBoop(num) {
  const arr = [];
  const indexArr = [];
  for (let i=0; i<=num; i++) {
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
  console.log(arr);
}