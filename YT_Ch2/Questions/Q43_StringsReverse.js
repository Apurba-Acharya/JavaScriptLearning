function absd(value){
    return value.split("").reverse().join(""); //1. split("": ["h", "a", "r", "s", "h"]) => 2. reverse() => join(""): Again to make it string
}

console.log(absd("harsh"));
