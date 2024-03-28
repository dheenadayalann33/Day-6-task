//Task:- 1 
class Movie {
    constructor(title, studio, rating= 'PG'){     // Task:- 1(a,b)
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

   getPG(arr){
    let newArr = [];
    for(let a in arr){
        if(arr[a].rating === 'PG-13'){
            newArr.push(arr[a])
        }
    }
    return newArr
   }
}

const movieObj = new Movie('ABC', 'Studio Green', 'PG-13');
const movieObj1 = new Movie('DEF', 'Studio RED', 'R')
const movieObj2 = new Movie('GHI', 'Studio Blue', 'R')
const movieObj3 = new Movie('Casino Royale', 'Eon Productions', 'PG-13') //Task:- 1(d)

console.log(movieObj.getPG([movieObj,movieObj1,movieObj2,movieObj3]));  //Task:- 1(c)


//Task:- 3
class Person {
    constructor(name, age, gender,martialStatus, constact, email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.martialStatus = martialStatus;
        this.constact = constact;
        this.email = email;
    }
}

const personObj = new Person("Nobody", 22 , 'Male', 'Single', 987654321, 'nobody123@gmail.com');
console.log(personObj);

//Task:- 2
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj = new Circle(1.0,"red") 
console.log(obj.Color);
console.log(obj.Radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);
obj.Radius=3.5
console.log(obj.Radius);
obj.Color="green"
console.log(obj.Color);

//Task:- 4 
class UberPrice {
    constructor(price, km) {
        this.price = price;
        this.km = km;
    }
    set rate (n){
        this.price = n
    }
    get rate (){
        return this.km * this.price
    }
}

