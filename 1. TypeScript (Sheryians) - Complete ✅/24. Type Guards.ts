// 03:47:21 - 03:55:58 - Type Guards 

// Type Guards and TypeScript Utility Types
// Using typeof and instanceof 
// Partial, Required, Readonly

function abcd (arg: string | number | any){
    if (typeof arg === "number"){
        //arg. ---> Shows only number related methods
        return "number";
    }

    else if (typeof arg === "string"){
        // arg. ---> Shows only string related methods
        return "string" ;
    }

    else {
        throw new Error ("Pagal zala kay re tu...")
    }
}

console.log(abcd(12));
console.log(abcd("Hello"));
abcd(true);

// type guards --> type narrowing
//______________________________________________________________

// Instance of

class TvKaRemote{
    switchTvoff(){
        console.log ("Switching off tv");
    }
}

class CarKaRemote {
    switchCaroff(){
        console.log ("Switching off Car");
    }
}

const tv = new TvKaRemote();
const car = new CarKaRemote();

function switchOffKaro(device: TvKaRemote | CarKaRemote){
    if(device instanceof TvKaRemote) {
        device.switchTvoff();
    }
    else if (device instanceof CarKaRemote){
        device.switchCaroff();
    }
}