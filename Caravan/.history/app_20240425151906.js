class Person{
    constructor(name,surname,age){
        this.name=name
        this.surname=surname
        this.age=age
        this.fullName = Person.getFullName()

    }

   static getFullName(){
        return this.name + " " + this.surname
    
    }

}



class PersonInfo extends Person{
    constructor(name,surname,age,job,mobile){
        super(name,surname,age)
        this.job=job
        this.mobile=mobile
}
}



let Fuad = new PersonInfo("Fuad","Mammadov",25,"Frontend Developer","+994555555555")
console.log(Fuad.getFullName())