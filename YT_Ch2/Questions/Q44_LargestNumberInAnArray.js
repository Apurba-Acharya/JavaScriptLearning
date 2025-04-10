function abcd (arr){
    var max = 0;
    for(var i=1; i<=arr.length; i++){
        if(arr[i]>arr[max]){
            max = i;
        }
    }
    return arr[max];
}

console.log(abcd([1, 2, 13, 4, 5, 14, 7]));
