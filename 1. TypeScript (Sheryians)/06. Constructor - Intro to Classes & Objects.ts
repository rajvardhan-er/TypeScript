// A constructor is a special method inside a class that runs automatically when an object is created.

class BottleMaker {
    constructor (public name: string, public price: number) {

    }
}
let b1 = new BottleMaker ("Milton", 1200);

// _________________________________________________________________

class HumanMaker {
    age = 0;
    constructor (public name: string, public isHandsome: boolean){

    }
}

new HumanMaker ('Raj', true) // new human name - Raj, Is he handsome - true

// __________________________________________________________________

class PlasticMaker{
    constructor (public brand: string, public price: number, public color: string, public material: string){

    }
}

let d = new PlasticMaker("Milton", 1200, "Pink", "plastic")
new PlasticMaker ("Milton", 100, "Green", "Metal")

// ___________________________________________________________________


class Music {
    constructor (public name: string, public artist: string, public thumbnail: string = "somethumbnail.jpg", public length: number, public free: boolean){
        if(!thumbnail){
            this.thumbnail = "somethumbnail.jpg" // this.thumbnail --> is constructor ke andar jo thumbnail variable hai wo target karo
        }
    }
}

let ml = new Music ("Dard-e-Disco", "Raju Ratsogi", "", 1200, false,);
let m2 = new Music ("Mud mud ke na dekh mud mud ke", "Farhan Qureshi", "", 2500, false);

m2.artist = "Ranchordas Chanchad"; // Artist name of m2 will be changed