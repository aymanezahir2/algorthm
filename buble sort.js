function BubleSort(acc){
    // this for help loop j to stop a point which variable
    for(let i =0; i<acc.length ;i++)
    {
        // this is response of change value
        for(let j =0;j<acc.length - i -1;j++)
        {
            // this simple condition
            if(acc[j+1]<acc[j]){
                // this is sawping if don't know go to elzero channel youtube a swaping Array
                [acc[j+1],acc[j]]=[acc[j],acc[j+1]]
            }
        };
    };
    // return params value
    return acc
};










let array = [5,7,4,2,8]

console.log(BubleSort(array))