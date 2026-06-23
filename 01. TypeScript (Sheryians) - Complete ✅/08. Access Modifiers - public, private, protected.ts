// 02:02:39 - 02:13:24 - Classes & Objects : Public & Private Access Modifier

//_________________________________________________________________________________________
// Access modifiers are rules that control who can access or use a property or method of a class.

// Think of access modifiers like security levels in a company.

// 1. Public

// Definition: Anyone can access it from anywhere.

// Real-life example:
// A company's reception desk is public. Employees, visitors, customers—everyone can go there and get information.

// Key idea: Open to everyone.

// 2. Private

// Definition: Only the class itself can access it. Nobody outside can see or use it.

// Real-life example:
// Your ATM PIN is private. Only you (the owner) should know it. Other people, even family members, shouldn't access it.

// Key idea: Completely hidden from the outside world.

// 3. Protected

// Definition: The class itself and its child classes can access it, but outsiders cannot.

// Real-life example:
// A family recipe passed from parent to children. Family members can use it, but people outside the family cannot.

// Key idea: Shared within the family (inheritance hierarchy), hidden from outsiders.
//_________________________________________________________________________________________


//Public Example
class BottleMaker{
    constructor(public name: string) { // name variable with type string ---> PUBLIC
    }
}

let b1 = new BottleMaker ("Milton"); // We gave name Milton
b1.name = "Gamma" // we can change name from MILTON to GAMMA, because we make name as PUBLIC in class.


//Private Example
class BottleMaker1{
    constructor(private email: string) { // name variable with type string ---> PRIVATE
    }
}

let b2 = new BottleMaker1 ("game.come") // Giving game.com as email
// b2.email = "Sham.com" // Shows error --> Property 'email' is private and only accessible within class 'BottleMaker1'. ---> we cannot change outside the class  --> But code will be run





// Public Example using Extend

class BottleMaker2 {
    constructor (public name: string){
    }
}

class BottleMaker3 extends BottleMaker2{
    constructor (name: string){
        super(name);
    }

    getValue(){
        console.log(this.name);
    }
}

let b4 = new BottleMaker3 ("Milton");
b4.getValue();  // prints Milton  --> Because name is PUBLIC
