// 02:13:25 - 02:19:12 - Classes & Objects : Protected Access Modifier

class BottleCover{
    protected name = "Raj";
}

class MetalBottleMaker extends BottleCover{
    public material = "Metal";

    changeName() {
        this.name = "Name Changed"  // name is protected, means it can be only accessible in same class and child or extends class.
    }
}

let b5= new MetalBottleMaker ();
// b5.name = "Shows Error" // --> Property 'name' is protected and only accessible within class 'BottleCover' and its subclasses.
