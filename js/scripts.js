// Business Logic

function beepBoop(num) {
  const arr = [];
  const indexArr = [];
  for (let i=0; i<=num; i++) {
    arr.push(i);
  }
  
  const strOfArr = arr.toString(" "); 
  const threeString = strOfArr.replace(/3/g, "Won't you be my neighbor?");
  const finalThreeArr = threeString.split(" ");

  console.log(finalThreeArr);
 

  // arr.forEach(function(instance) {

    // if (instance === 3) {
    //   indexArr.push(arr.indexOf(instance));
    // }
//   });
}

// if (arr.includes(3)) {
  //   arr.forEach(function(instance) {
  //     indexArr.push(arr.indexOf());
  //   });
  //   console.log(indexArr);
  // }

// UI Logic

//getNum function