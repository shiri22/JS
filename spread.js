//spread:= It is used to take set of values from one element and expand in another element

set1=[1,2,3,4];
set2=[...set1,5,6,7];
console.log(set2); //[1,2,3,4,5,6,7]


//in objects

set1={name:'shiri',age:24},
set2={...set1,salary:25000}
console.log(set2); // { name: 'shiri', age: 24, salary: 25000 }


//Destructuring:= set of values to be unpacking and assign to individual elements

const values=[10,20,30];
[a,c]=values;
console.log(a,c); // 10 20

const value=[10,20,30];
[a, ,c]=value;
console.log(a,c);  //10 30


const valuess=[10,20,30];
[a,b,c]=valuess;
console.log(a,b,c);  //10 20 30


//in objects

valu={
    name:'shiri',
    age:24
}
console.log(valu) //{name:'shiri',age:24}
const {name,age}= valu;
console.log(name,age); //shiri 24