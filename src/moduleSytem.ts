console.log("Module System Example");
console.log("============ Name System =============");
import add, { bookName } from "./module/math";
import { age, greet } from "./module/named";
import type {User} from './module/named';

console.log(age);
console.log(greet("Alice"));

const user: User ={
    name: "Abu Daud",
    email:"abu@gmail.com"
}

console.log(user);

console.log(greet(user.name));

console.log("================= Default Export ================");

console.log("Result of add(5, 10):", add(5, 10));

console.log("Book Name:", bookName);

import * as Utils from './module/named'
console.log(Utils.age)
console.log(Utils.greet("Abu Daud Hossain"))


const food = ()=>{
    let count = 0;
    function increase(){
        decrease();
        console.log("Increase called", count);
        count = count + 1;
         return  count
    }

    function decrease(){
        console.log("Decrease called", count);
        return count = count - 1;
    }

    function increaseAndDecrease(){
        increase();

        return count - 2;
    }

    return {
        increase,
        decrease,
        increaseAndDecrease
    }

}

const newItem = food();
console.log(newItem.increase());
console.log(newItem.increase());
console.log(newItem.increase());
// console.log(newItem.decrease());
// console.log(newItem.increaseAndDecrease());