// const person: {
//     name: string,
//     age: number
// } = {
// const person : {    
//     name: string,
//     age : number ,
//     hobbies: string[],
//     role: [number,string];
// } = {
//     name:'max',
//     age: 30,
//     hobbies: ['Sport','Golf'],
//     role: [2,'author']
// };

// person.role.push('admin');
// person.role[1] = 10;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY , AUTHOR};

const person = {
    name:'max',
    age: 30,
    hobbies: ['Sport','Golf'],
    role: Role.ADMIN
};



let favActiv : string[]
favActiv = ['Sport','Golf'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())//
}

if (person.role === Role.AUTHOR) {
    console.log('is author ');
}