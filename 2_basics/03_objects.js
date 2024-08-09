//  singleton
// Object.create


// series continus wwith lateral

// object lateral

const Mysym = Symbol("key1");

const JsUser ={
    name:"rajkumar",
    "Full name":"rajveerroy",
    [Mysym]:"mykey1",
    age: 18,
    location: "jharkhand",
    email: "raj@roy8674gmail.com",
    isLogedIn: false,
    LastLogInDay:["monday","sunday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[Mysym]);
 
JsUser.email="kraj@gamil.com" //for change or overwrite 
// Object.freeze(JsUser)         // use freez for not going to chnage anything
JsUser.email="mrraj@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("welcom RAJ");
    
}


JsUser.greeting2 = function(){
    console.log(`welcom,${this["Full name"]}`);
    
}
console.log(JsUser.greeting2());




