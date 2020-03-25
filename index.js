
// Hello function //
const sayhello = name => console.log(`hello ${name}`);
sayhello('shubham');

// Odd nd Even //
for (i = 1; i < 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Check the function whichone true //
const realdata = () => {
    // example operation
}
const fakedata = () => ({
    name: 'shubham',
    age: 21
});

const deveploment = false;

const resultdata = deveploment
    ? realdata
    : fakedata;

console.log(resultdata);

// Solve more condtion in one method //

const doubel = x => x * 2;
const triple = x => x * 4;
const subtract = x => x - 2;
const add = x => x + 2;

var number = 200;

listmethod = [
    doubel,
    triple,
    subtract,
    add
];

listmethod.forEach(func => number = func(number));

console.log(number);

// Two argument function //
const add5 = (x, y) => x + y;
const subtract1 = (x, y) => x - y;
const divide = (x, y) => x / y;

const combine2and3 = shu => shu(10, 2);

console.log(combine2and3(add5));
console.log(combine2and3(divide));

// multiply //

const double1 = x => x * 2;
const triple1 = x => x * 3;
const quartert1 = x => x * 4;

const createmultiply = mul => mul(4);

console.log(createmultiply(double1));

// Implement private variable //

const person = ({ name, age, job }) => {
    var _name = name;
    var _age = age;
    var _job = job;

    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

        setJob: newJob => _job = newJob,

    };
}

const me = person({ name: 'shubham', age: '21', job: 'teacher' });
console.log(me.getName());

me.setJob('printer');
console.log(me.getJob());

// two object marge //

const object1 = {
    name: 'aman',
    age: 21,
    village: 'kaleniya',
};

const object2 = {
    type: 'job',
    office: 'mumbai',
};

const marge = {
    ...object1,
    ...object2,
};
console.log(marge);

const update = {
    name: 'shubham',
    age: '31',
};

const newudate = {
    ...object1,
    ...update,
};
console.log(newudate);

// Array marge //
const list = [1, 2, 3, 4];
const list2 = [5, 6, 7, 8];
const connbinelist = {
    ...list,
    ...list2,
};
// console.log(connbinelist);

const updatelist = [
    0,
    ...list,
];
console.log(updatelist);

// reverse array //
list.reverse();
console.log(list);


