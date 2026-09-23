class Car{
    brand: string;
    year: number;

    constructor(brand:string, year: number){
        this.brand = brand;
        this.year = year;
    }

    displayInfo(){
       console.log( `Car: ${this.brand} (${this.year})`);
    }
}

const car1 = new Car("Toyota", 2023);
car1.displayInfo();