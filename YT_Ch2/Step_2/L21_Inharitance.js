//Inharitnce :

class father {
  f = 100;
  display_f() {
    console.log("Father class : ", this.f);
  }
}

class child extends father {
  c = 150;
  display_c() {
    console.log("Child class: ", this.c);
  }
}

let cChild = new child();
cChild.display_f();
cChild.display_c();
