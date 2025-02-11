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

ax = new AXIS();
console.log(ax.roi())