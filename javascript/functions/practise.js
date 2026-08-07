// average of three numbers usinf function

function avg( a , b , c ){
    console.log((a + b + c) / 3);
}
avg(15 ,20 ,25);

//multiplication of two numbers

function mul(a ,b){
    console.log(a*b);
}
mul(10,2);

//tables by user using function

function table(a){
    for (let i=1;i<=10;i++){
        console.log(a +" X "+ i +" = "+ (a*i))
    }
}
table(2);