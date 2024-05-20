class Person{
    constructor(name,surname,age){
        this.name=name
        this.surname=surname
        this.age=age
    }

        getFullName(){
            return this.name + " " + this.surname
        }

        static getBirthYear(age){
            return new Date().getFullYear() - age
        }

        birthYear = Person.getBirthYear(this.age)
    } // Add a closing brace here

   



var Fuad = new Person("Fuad","Mammadov",20)
console.log(Fuad.getFullName())