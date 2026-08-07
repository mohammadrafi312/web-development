//hof -higher order functions are 

//1)function calls another function 

function greet(){
    console.log("hello");
}
function execute(fn){
    fn();
}
execute(greet);

//2)in return we cfall another function 
function sum(){
    return function add(){
        console.log("added");
          }
}
let s =sum();
console.log(s);