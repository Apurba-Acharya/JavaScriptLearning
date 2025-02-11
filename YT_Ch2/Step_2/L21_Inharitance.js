class A{
    a = 100;
    display(){
        console.log("A: ",this.a);
    }
}
class B extends A{
    b = 150;
    show(){
        console.log("B: ",this.b);
    }
}

let bobj = new B();
bobj.display();
bobj.show();
