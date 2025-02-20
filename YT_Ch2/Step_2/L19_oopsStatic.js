// VARIABLE :

class Test{
    static a = 10; //static variable
    b = 20; //non static variable

    static m1(){ //static method
        console.log("This is m1 static method...")
    }
    m2(){ //non static method
        console.log("This is m2 non static method (By creating object)")
    }
}

//1. ***We can directly access static variable and methods using class name
console.log ("static variable: ", Test.a); //10
Test.a = 1000;
console.log ("Modified static variable value : " + Test.a); //1000
console.log ("non static variable : ", Test.b); //undefined : without object creation access of non static variable is not possible

Test.m1(); //This is m1 static method...
//Test.m2(); //non static: TypeError: Test.m2 is not a function

//2. ***we can access non static variable and non static methods using object
let t = new Test(); //Object
console.log("non static method (By creating object) : ", t.b);
t.m2();
