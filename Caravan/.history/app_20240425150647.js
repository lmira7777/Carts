class Person{
    constructor(name,surname,age){
        this.name=name
        this.surname=surname
        this.age=age
        this.getBirthYear = getBirthYear()
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