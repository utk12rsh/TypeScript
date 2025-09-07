var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("".concat(this.name, " ").concat(this.age));
    };
    return Person;
}());
var person1 = new Person("Utkarsh", 25);
var person2 = new Person("Anita", 30);
person1.greet();
person2.greet();
