// Generic Interfaces

interface Halua <T>{
    name: string;
    age: number;
    key: T;
}

function abcde (obj: Halua <string>){}
abcde({name: "foo", age: 25, key: "jgbjgbgn"})