class Person{
    constructor(name,surname,age){
        this.name=name
        this.surname=surname
        this.age=age
    }

    getFullName(){
        return this.name + " " + this.surname
    }

    static getBirthYear(){
        return new Date().getFullYear() - this.age
    }
}


var Fuad = new Person("Fuad","Mammadov",20)
console.log(Fuad.getFullName())
console.log(Fuad.getBirthYear(20))