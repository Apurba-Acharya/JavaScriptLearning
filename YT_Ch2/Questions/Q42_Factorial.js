function getFact (num){
    let fct = 1;
    for(var i=1; i<=num; i++){
        fct = fct * i;
    }
    return fct;
}

console.log(getFact(5));
