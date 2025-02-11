class Test{
    static a = 10; //static variable
    b = 20; //non static variable

    static m1(){ //static method
        console.log("This is m1 static method...")
    }
    m2(){ //non static method
        console.log("This is m2 non static method...")
    }
}

//1. We can directly access static variable and methods using class name
console.log (Test.a); //10
Test.a = 1000;
console.log ("Modified static variable value: " + Test.a); //1000
console.log (Test.b); //undefined

Test.m1(); //This is m1 static method...
//Test.m2(); //non static: TypeError: Test.m2 is not a function

//2. we can access non static variable and non static methods using object
// By creating object.
let t = new Test(); //Object
console.log(t.b);
t.m2();




