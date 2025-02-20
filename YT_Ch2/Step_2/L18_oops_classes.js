class Student { //Class = Attribute + Behaviours

    // Type 1 :
    setDetails(sid,sname,grade){ // Attribute
        //*This: is always representing the class
        this.sid = sid;
        this.sname = sname;
        this.grade = grade;
    }

    display1(){ //Behaviours
        console.log("setDetails display 1: ", this.sid,this.sname,this.grade);
    }


    // Type 2 :
    //CONSTRUCTOR: Constructor is only made for initializing the value. at the time of object creation constructor will be invoked.
    constructor(sid,sname,grade){
        this.sid = sid;
        this.sname = sname;
        this.grade = grade;
    }
    display2(){ //Behaviours
        console.log("constructor display 2 : ", this.sid,this.sname,this.grade);
    }

}

// Type 1 :
let stu = new Student(); // Object 1
stu.setDetails(101,"Dog","D");
stu.display1();

//Type 2 :
let stu1 = new Student(101,"Cow","E"); // Objects 2
stu1.display2();

let stu2 = new Student(101,"Bat","A++"); // Objects 3
stu2.display2();

let stu3 = new Student(101,"Monkey","C"); // Objects 4
stu3.display2();