//  const TinderUser = new Object()

const TinderUser = {}
TinderUser.Id="123abc"
TinderUser.name="raj kumar"
TinderUser.IsLogedIn=false
//  console.log(TinderUser);

 const RegularUSer ={ 
    email:"rajbeer@5741gmail.com",
    fullname:{
        username:{
            firstName:"raj",
            lastname:"roy roy"
        }

    }

 }
//  console.log(RegularUSer.fullname.username.firstName)

const obj1 = { 1:"A",2:"B",3:"C"}
const obj2 = { 4:"x",5:"y",6:"z"}
const obj3 = { 7:"x",8:"y",9:"z"}

// const obj3 =Object.assign({} ,obj1,obj2)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

 

