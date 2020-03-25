
// combine function //
    //  -- find average salary --    //
const emplo = [
    {
        name: 'shubham',
        sal: 1000,
        job: 'teacher',
    },
    {
        name: 'subhi',
        sal: 2000,
        job: 'teacher',
    },
    {
        name: 'aman',
        sal: 3000,
        job: 'private',
    },
    {
        name: 'himansh',
        sal: 4000,
        job: 'govt',
    }
];

const expl = emplo.filter(func => func.job == 'teacher');
const newadd = expl.map(fun => fun.sal);
const redusal = newadd.reduce((acc,x) => acc + x, 0);
const aversal = redusal / newadd.length;

console.log(aversal);

// Partial apllication //
const add = (x,y,z) => x + y + z;
const addpartial = x => 
 y =>
 z => add(x,y,z);
 const sum = addpartial(5)(6)(7);
 console.log(sum);

 // recursion //
 const downup = (x,max) => {
     if(x > max) return;
      console.log(x);
    downup(x + 1,max);
 };
 downup(0,10);

 // count value of array in //
 //one more comment
 const mainlist = ['shubham','aman','makal','sakshi','shubham','aman','makal','sakshi'];

const newmain = votes => {
    return votes.reduce((acc,x) =>({
        ...acc,
        [x]: acc[x] ? acc[x] + 1 : 1,
    }) ,{});
};
console.log(newmain(mainlist));