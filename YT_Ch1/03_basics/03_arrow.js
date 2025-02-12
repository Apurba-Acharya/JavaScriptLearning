const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome ro website`);
    }

}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage()