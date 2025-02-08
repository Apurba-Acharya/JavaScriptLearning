//Prototype using funtion to the class:

class Employee{ 
    constructor (eid,ename){
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.sal = 50000;

Employee.prototype.display=function(){ // here "display" is the name of the function
    console.log(this.eid, this.ename, this.sal)
}

em1obj = new Employee(101,"David"); // Object 1
em1obj.display();

em2obj = new Employee(111,"Ashish"); // Object 2
em2obj.display();



