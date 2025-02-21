//ENCAPSULATION :

class Student {
  constructor() {
    let name, marks;
  }
  getName() { // get method
    return this.name;
  }
  setName(name) { //set method

    this.name = name;
  }

  getmarks() {
    return this.marks;
  }
  setmarks(marks) {
    this.marks = marks;
  }
  display() {
    //Behaviours
    console.log("Using behaviours: ", this.getName(), this.getmarks());
  }
}

let stu = new Student();
stu.setName("John");
stu.setmarks(90);
console.log("Printing value through object reference : ", stu.getName(), stu.getmarks());
stu.display();
