function BubleSort(acc){
    for(let i =0; i<acc.length ;i++)
    {
        for(let j =0;j<acc.length - i -1;j++)
        {
            if(acc[j+1]<acc[j]){
                [acc[j+1],acc[j]]=[acc[j],acc[j+1]]
            }
        };
    };
    return acc
};










let array = [5,7,4,2,8]

console.log(BubleSort(array))