var arr = [1, 2, 3, 4, 5];
for(var i=arr.length-1; i>=0; i--){
    console.log(arr[i]);
}


for(var i=0; i<Math.floor(arr.length/2); i++){ //Math.floor: to remove decimal value
    var temp = arr[i];
    arr[i]= arr[arr.length-1-i];
    arr[arr.length-i-1]=temp;  
}
console.log(arr)