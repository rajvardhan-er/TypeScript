// 02:26:09 - 02:34:23 - Classes & Objects : Getters & Setters

// Getter (get) → used to read a value.
// Setter (set) → used to update/write a value.
// They let you use method-like logic while accessing values as if they were normal properties.

class User {
    constructor (public _name: string, public age: number){   
    }

    get name1(){ // Getters help to give class inside value directly on console
        return this._name;
    } // A getter allows you to access a value like a property while executing logic behind the scenes.

    set name (value: string){ // We can set new name on console using setters (Set)
        this._name = value;
    } // A setter allows you to assign a value like a property while executing logic before storing it.
}

let u1 = new User ("Raj", 25)