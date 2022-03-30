let arrayOf = [5, 8,4, 2,8 ,1, 3];
// simple function with its params
function selectionSort(acc) {
  // loop to previous last item in array f 
  for (let i = 0; i < acc.length - 1; i++) {
    // the minI is change in loop j and keep in your mind that idchange untill end loop j
    let minI = i;
    for (let j = i + 1; j < acc.length; j++) {
      if (acc[minI] > acc[j]) {
        minI = j;
        
      }
  
    }
    // if if the same number
    if (minI != i) {
      [acc[i], acc[minI]] = [acc[minI], acc[i]];
    }
  }
  // return the value the new array
  return acc
}

// console log for recall a function 
console.log(selectionSort(arrayOf))
