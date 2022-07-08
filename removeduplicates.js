//Removing Duplicates form Array of objects

const users=[
    {name:'shiri'},
    {name:'shiri'},
    {name:'shiva'}
]
console.log(users);
const user=users.map(JSON.stringify)
console.log(user);
const set= new Set(user);
console.log(set)
const unique=Array.from(set).map(JSON.parse)
console.log(unique)