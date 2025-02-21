class Animal {
    constructor (color){ //color: method variable
        this.color = color; //color: class variable

    }
    printColor(){ //Parent Method
        console.log("Parent method: ",this.color);
    }
}

class dog extends Animal{
    constructor(color,food){
        super(color); //Super method: to call the parent class constructor
        this.food = food;
    }
    eating (){
        console.log("Eating (Child method): ",this.food);
    }
    display(){ //Child method
        this.printColor();
        this.eating();
    }
}
d = new dog("Black","Bread");
d.display();