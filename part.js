// mapping //
const container = [2, 3, 4, 5];
const dou = x => x + 2;
const answer = container.map(dou);
console.log(answer);

// filtering //
const container2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const condition = x => x % 2 == 0;
const resulcontainer = container2.filter(condition);
console.log(resulcontainer);

// object key value find //
const shubhamlist = [
    {
        name: 'aman',
        city: 'delhi',
        job: 'programmer'
    }
];

var num = 'aman';

var jj = shubhamlist.find(fid => fid.name == num);
console.log(jj);

// some function check any condition true when result will be true; //
// every function checked any condition false when reslt will be false;; //
const employee = [
    {
        name: 'makal',
        salary: 1000,
    },
    {
        name: 'sakshi',
        salary: 20000,
    }
];
const reultsalary = employee => employee.salary > 1500;
const resultsome = employee.every(reultsalary);
console.log(resultsome);

// slice //
const slicing = [
    {
        village: 'kaleniya',
        age: 21,
        subject: 'math',
        roll: 001,
        car: 'ford'
    }
];
console.log(slicing.slice(0));

// sorting //
const listsort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const acsend = (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}
const anssnd = listsort.slice().sort(acsend);
console.log(anssnd);

// reduce //
const listreduce = [1,11,22,33,44,55,66,77];

const subh = listreduce.reduce((acc,ss) => {
console.log(`first ans ${acc}`);
console.log(`first ans ${ss}`);
return  acc * ss;
},5);
