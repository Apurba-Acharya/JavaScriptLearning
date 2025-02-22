class Parent{
    draw(){
        return "I am generic shape";
    }
}

class Child1 extends Parent{
    draw(){ //same parent method name with different parameter
        return "I am squre";
    }
}

class Child2 extends Parent{ 
    draw(){ //same parent method name with different parameter
        return "I am circle";
    }
}

let s = new Parent();
console.log("Parent : ", s.draw());

s = new Child1(); // using same object reference name
console.log("Child1 : ", s.draw());

s = new Child2(); // using same object reference name
console.log("Child2 : ", s.draw());