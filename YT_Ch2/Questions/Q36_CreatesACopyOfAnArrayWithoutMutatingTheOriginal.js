var arr= [11, 24, 36, 4, 5]
var arr2= [];

arr.forEach(function(value){
    arr2.push(value)
})

arr2.pop();
console.log(arr, arr2)