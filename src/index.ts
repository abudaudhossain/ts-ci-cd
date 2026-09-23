let message: string = "Hello TypeScript!";
console.log(message);

// Basic Function
function add(a: number, b: number): number {
    return a + b;
}

console.log(`2 + 3 = ${add(2, 9)}`);


function greet(name?: string): void {
    if (name) {
        console.log(`Hollo ${name}`)
    } else {
        console.log("Hello Guest")
    }

}

greet("Abu Daud")
greet()

// Object Types
let user: {
    name: string;
    age: number;
    isActive: boolean
} = {
    name: "Abu Daud",
    age: 25,
    isActive: true
};

console.log(user);
user.name = "Sumon";
console.log(user);
user.age = 30;

let product: { name: string; price?: number } = {
    name: "Laptop"
}

console.log("=================== Generic Class ====================")

// class
class ItemStorage<T> {
    private item: T[] = [];

    add(item: T) {
        this.item.push(item);
    }

    getAll(): T[] {
        return this.item;
    }
}

const stringStorage = new ItemStorage<string>();
stringStorage.add("Item 1");
stringStorage.add("Item 2");
console.log(stringStorage.getAll());

const numberStorage = new ItemStorage<number>();
numberStorage.add(12);
numberStorage.add(34);
console.log(numberStorage.getAll())

// Exercise - 1
console.log("------------------ Exercise 1-----------------")
function echo<T>(a: T): T {
    return a;
}

console.log(echo(12))
console.log(echo("Abu Daud"))

console.log("------------------ Exercise 2-----------------")
function getLastItem<T>(item: T[]): T {
    return item[item.length - 1];
}

console.log(getLastItem<string>(["abu ", "Abu Daud", "Sumon"]))
console.log(getLastItem<number>([1, 3, 5]))

console.log("------------------ Exercise 3-----------------")
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
console.log("------------------ Exercise 4-----------------")
class Collection<T> {
    private items: T[] = [];
    add(item: T) {
        this.items.push(item);
    }
    getAll(): T[] {
        return this.items;
    }
}
console.log("------------------ Exercise 5-----------------")
function printName<T extends { name: string }>(item: T): void {
    console.log(`Name: ${item.name}`);
}
console.log("------------------ Exercise 6-----------------")