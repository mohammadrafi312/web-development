let profile ={
    name :"rafi",
    email :"shaikrafi@gmail.com",
    address :{
        pincode:523201,
        doorno :"0-0"
    }
}
console.log(profile);
console.log(profile.address);//view nested 

console.log(profile.address.doorno);//view by property ..
// update inside nested loop
profile.address.phno =9381939958 ;
console.log(profile.address);