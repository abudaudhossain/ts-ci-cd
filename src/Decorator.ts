function Logger(prefix: string = 'LOGGER - ') {
    return function (constructor: Function) {
        console.log(prefix, ": ", constructor.name);
        console.log('=========================');
    }
}

@Logger()
class Person {

}

@Logger()
class People {

}

console.log("===========================");

function MethodLogger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    console.log('============start decorator=============');
    console.log(`propertyKey:`, propertyKey);
    console.log(`descriptor:`, descriptor);
    console.log('value:', descriptor.value);
    const original = descriptor.value;
    console.log('-------------------------- before method override -------------------');
    descriptor.value = function (...args: []) {
        console.log(`Method ${propertyKey} is called with args: ${JSON.stringify(args)} and target:`, target);
        console.log("I am new method implementation", args, this);
        let result = original.apply(this, args)
        console.log("Original method result:", result);
        return "Modified Result";
    };
    console.log('-------------------------- after method override -------------------');
    // const originalMethod = descriptor.value;
    // return descriptor.value;
    // descriptor.value = function (...args: any[]) {
    //     console.log(`Method ${propertyKey} is called with args: ${JSON.stringify(args)}`);
    //     return originalMethod.apply(this, args);
    // }

    console.log('============end decorator=============');
    return descriptor;
}

@Logger()
class Animal {
    @MethodLogger
    speak(a: any, b: any) {
        console.log('Animal speaks running');
        return `Animal speaks ${a} and ${b}`;
    }

    getColor() {
        console.log("Animal color");
    }
}
console.log("==========  function start =================");

const dog = new Animal();
console.log('---56 ---', dog.speak('Woof', 123));
// dog.getColor();

console.log("========== end function  =================");

console.log("=================== end method decorator ====================");

function PropertyDescriptor(target: any, propertyKey: string) {
    console.log('------- property decorator -------');
    console.log('Target: ', target);
    console.log('Property Key: ', propertyKey);

   let value: any;
    console.log('----------------- defining property -----------------');
    Object.defineProperty(target, propertyKey, {
        get() {
            console.log(`Getting value of property ${propertyKey}`);
            return value;
        },
        set(newValue) {
            console.log(`Setting value ${newValue} and  to property ${propertyKey}`);
            value = newValue;
        }

    })
    console.log('----------------- end -----------------');
}

class Student {
    @PropertyDescriptor
    name: string = "red";
}

const student = new Student();
console.log('---94---', student.name);
student.name = "blue";
console.log('---96---', student.name);