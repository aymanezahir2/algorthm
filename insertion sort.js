let sort = [1,9,4,5,7]
function inertionSort(acc) {
  for(let i =0;i<acc.length; i++){
    let key = acc[i]
    let j = i-1 
    while(j>=0 && acc[j]>key){
        acc[j+1] = acc[j]
        j= j-1
    }
    acc[j+1] = key
}
return acc
}

let insertion = inertionSort(sort)

