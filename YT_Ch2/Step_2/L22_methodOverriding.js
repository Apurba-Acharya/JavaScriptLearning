/*Method Overridding : Method created in parent class using extends 
same method we can use in child class to pass different value */


class Bank{
    roi(){
        return 0.3;
    }
}
class AXIS extends Bank{
    roi(){
        return 10.5;
    }
}
class SBI extends Bank{
    roi(){
        return 12.03;
    }
}

let sbi = new SBI();
console.log(sbi.roi());

let axis = new AXIS();
console.log(axis.roi())