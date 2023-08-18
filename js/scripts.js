// Business Logic

function beepBoop(num) {
  const arr = [];
  const indexArr = [];
  for (let i=0; i<=num; i++) {
    arr.push(i);
  }
  
  arr.forEach(function(instance) {
    if (instance === 3) {
      indexArr.push(arr.indexOf(instance));
    }
  });
  console.log(indexArr);
}

// if (arr.includes(3)) {
  //   arr.forEach(function(instance) {
  //     indexArr.push(arr.indexOf());
  //   });
  //   console.log(indexArr);
  // }

// UI Logic

//getNum function