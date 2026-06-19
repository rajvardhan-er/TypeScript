// 01:54:22 - 02:02:38 - Classes & Objects : this. keyword

class ABCD {
    name = "Raj";

    changeName(){   //This is function inside class i.e Method
        this.name   // if we are accessing any variable in class,then we need to use this keyword to access this variable.
    }

    changeSomeMoreStuff(){
        console.log("Hey");
        this.changeName // for accessing a method in another method, we need to use this keyword.
    }
}