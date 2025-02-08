//Prototype using class:

class Employee{ 
    constructor (eid,ename){
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.sal = 50000;

em1obj = new Employee(101,"David"); // Object 1
console.log (em1obj.eid,em1obj.ename,em1obj.sal);

em2obj = new Employee(111,"Ashish"); // Object 2
console.log (em2obj.eid,em2obj.ename,em2obj.sal);

