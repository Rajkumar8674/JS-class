const Marvel_heros = ["thor","ironman","hulk"]
const DC_heros = ["superman","flash","batman"]

// Marvel_heros.push(DC_heros)
// console.log(Marvel_heros);
// console.log(Marvel_heros[3][2]);


// const ALL_heros = Marvel_heros.concat(DC_heros)
// console.log(ALL_heros);

//  spread opperater
const MyNew_heros = [...Marvel_heros,...DC_heros];
// console.log(MyNew_heros);


const anOtheerArray = [1,2,3,[8,5,2],8,[5,3,1]]
const newAnotherArray = anOtheerArray.flat(Infinity)
// console.log(newAnotherArray);

console.log(Array.isArray("rajveerroy"));

console.log(Array.from("rajveerroy"));

