//Prototype using function:

function student(){ //function: itself is an object in javascript
    this.name = "John";
    this.gender = "male";
}

student.prototype.age = 35; //after add age in prototype the age value is added in student object.

stu1 = new student();

console.log(stu1.name);
console.log(stu1.gender);

// stu1.age = 35; //This is not required after create prototype
console.log(stu1.age, stu1.name, stu1.gender); //35 John male

stu2 = new student;
console.log(stu2.age, stu2.name, stu2.gender); //undefined John male

//To access undefined (the age value) in stu2 object reference, we needs to create prototype of age.
