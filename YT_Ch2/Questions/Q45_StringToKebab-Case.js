function kebab(str){
    return str.split(' ').join('-'); // return str.replace(' ', '-')
}

console.log(kebab("How are you?"));
