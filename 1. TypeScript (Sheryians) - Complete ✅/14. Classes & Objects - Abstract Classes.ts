// 02:38:28 - 02:50:09 - Classes & Objects : Abstract Classes
// An abstract class is a blueprint that cannot be used directly, but it tells other classes what they must have.
class Payment {  // This class holds essential data, just hold only base data. its not a complete data holder
    constructor (protected amount: number, protected account: number) {
    }

    isPaymentValid(amount: number){
        return this.amount > 0;
    }
}

class Paytm extends Payment {

}

//_____________________________________________________________________________________________________________________________

class CookingEssentials {
    constructor (protected gas: number, public gas_name: string) {

    }
}

class Sabji extends CookingEssentials { // Means --> Agar sabji banani hai to atleast basic Cooking Essentials Chahiye

}

//______________________________________________________________________________

abstract class Notification1 {
  // Blueprint: defines WHAT every notification must do
  // Abstract class = WHAT
  abstract send(): void;
}

class EmailNotification extends Notification1 {
  // Real implementation: defines HOW email notifications send
  // Concrete class = HOW
  send() {
    console.log("Email sent");
  }
}