 for (let i=10;i>=1;i--){
    if(i==5){
        break; //from 0 to 4th value
    }
    console.log(i);
}

for (let i=10;i>=1;i--){
    if(i==5 || i==3 || i==9){
        continue; // skpping the value
    }
    console.log(i);
}