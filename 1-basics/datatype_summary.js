//primitive

//7 type= string, number , boolean,null, undefine,symbol,BigInt


// reference (non-primitive datatype)= array,function,object:

// memory= stack(primitive) And heap(non-primitive)
// stack is a copy
// heap is  reference value


const Id=Symbol('123')
const anotherID=Symbol('123')
console.log(Id==anotherID);


const heros = ["thor,ironman,deadpool"];

let object = {
    name:"raj kumar"
    age: 20,
}