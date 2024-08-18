function addTwoNumber(num1,num2){
    // console.log(num1 + num2);

    return num1+num2;
    
}
  const result= addTwoNumber(25,4);
//   console.log(result);



function userLogIn(username){
    if(username===undefined){
        console.log("please enter your name");
        return
    }
    return `${username} you just login`
        
}
// console.log(userLogIn("raj kumar"));
// console.log(userLogIn());




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
  