class Student{
    constructor(){
        let name,marks;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getmarks(){
        return this.marks;
    }
    setmarks(marks){
        this.marks = marks;
    }
    display(){ //Behaviours
        console.log ("Using behaviours: ", this.getName(), this.getmarks());
    }
}

let stu = new Student();
stu.setName("John");
stu.setmarks(90);
console.log(stu.getName(), stu.getmarks());
stu.display();
