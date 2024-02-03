
// functions
function greet(name:string){

    console.log("Hello "+name.toUpperCase());

}

greet("hansaja");

// Arrow functions
let login = (name: string, email: string, isPaid :boolean = false) =>{

}

login("Hansaja","Hansaja@gmail.com")


// We can define a return type of function
function addTwo(num: number):number{
    return num+2
    //  return "hello"
}

let final = addTwo(5)


// Also we can define return typr to the arrow function

let getHello = (): string => {
    return "Hello"
}

var superHeroes = ["Batman","Spiderman","Ironman"]
// var superHeroes=[1,2,3]

// Typescript implesitly detect the type of array and we don't have to define a type 
superHeroes.map((hero:string): string=>{
    return `This is super hero ${hero}`
})


// We don't return a value we use to void
function errorHandle():void{
    console.log("Exception")
}

// never
function throwError(msg: string):never{
    throw new Error(msg);
}




