class Student { //Class = Attribute + Behaviours

    // setDetails(sid,sname,grade){ //Attribute
    //     //*This: is always representing the class
    //     // this.sid = 101;
    //     // this.sname = "John";
    //     // this.grade = "A";

    //     this.sid = sid;
    //     this.sname = sname;
    //     this.grade = grade;
    // }

    //CONSTRUCTOR: Constructor is only made for initializing the value. at the time of object creation constructor will be invoked.

    constructor(sid,sname,grade){
        this.sid = sid;
        this.sname = sname;
        this.grade = grade;
    }
    display(){ //Behaviours
        console.log(this.sid,this.sname,this.grade);
    }
}

// let stu = new Student();
// stu.setDetails(101,"Dog","D");
// stu1.display();


let stu1 = new Student(101,"Cow","E"); // Objects 1
stu1.display();

let stu2 = new Student(101,"Bat","A++"); // Objects 2
stu2.display();

let stu3 = new Student(101,"Monkey","C"); // Objects 3
stu3.display();