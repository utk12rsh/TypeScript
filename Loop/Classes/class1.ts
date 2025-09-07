class Person{
    name: string;
    age: number;
    
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    
    greet():void{
        console.log(`${this.name} ${this.age}`);
    }
}

let person1 = new Person("Utkarsh", 25);
let person2 = new Person("Anita", 30);

person1.greet();
person2.greet();