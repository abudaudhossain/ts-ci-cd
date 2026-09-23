class User {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const user1 = new User("Abu Daud", 26);

user1.greet();

const user2 = new User("Sumon", 23)
user2.name = "aub"
user2.greet();