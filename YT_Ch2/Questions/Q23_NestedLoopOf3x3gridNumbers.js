//3x3 grid :
// 1 2 3
// 4 5 6
// 7 8 9

let a = 1;
for (let i=1; i<=3; i++){ //Outer loop
    let str = "";
    for (let j=1; j<=3; j++){ //Inner loop
            str = str + `${a}` //str = str + " " + a 
            a++;
    }
    
    console.log(str);

}
