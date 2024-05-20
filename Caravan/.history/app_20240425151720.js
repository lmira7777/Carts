class Person{
    constructor(name,surname,age){
        this.name=name
        this.surname=surname
        this.age=age

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
console.log(fuad)