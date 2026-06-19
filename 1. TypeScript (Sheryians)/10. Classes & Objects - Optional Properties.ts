// 02:19:13 - 02:22:05 - Classes & Objects : Optional Properties 
class User {
    //constructor (public readonly name: string){}
    constructor (public name: string){}

    changeName(){ // when we call this function the name changed.
        this.name = "Hello"; // we use readonly in upper side so it shows error i.e ---> Cannot assign to 'name' because it is a read-only property.
    }
}

let u1 = new User ("Raj"); // Setting name as Raj
u1.changeName(); // The name will be changed from Raj to Hello.

// But if we use readonly property, then the name will not be changed from anywhere.