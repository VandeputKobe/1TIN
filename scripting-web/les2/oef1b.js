function minimum(lijst){
    var min = lijst[0];
    for (let i = 1; i < lijst.length; i++){
        if (lijst[i] < min){
            min = lijst[i];
        }
    }
    return min;
}

const a = [5,4,7,6,3,2,1,9,5]
console.log(minimum(a))