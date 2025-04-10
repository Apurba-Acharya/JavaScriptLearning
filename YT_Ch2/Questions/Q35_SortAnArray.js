var arr = [5, 2, 9, 1, 0]; //Bubble sort: Assending Array

for(var j=0; j<arr.length-1; j++){
    for(var i=0; i<arr.length-j-1; i++){
        if(arr[i]>arr[i+1]){
            
            var temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
}
console.log(arr);



