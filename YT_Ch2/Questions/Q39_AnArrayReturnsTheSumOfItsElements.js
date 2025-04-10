function sumofarr(arr){
    var sum = 0;
    arr.forEach(function(v){
        sum = sum + v;
    })
    return sum;
}

console.log(sumofarr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
