
const obj = [
  {
    name:'shubham',
    salary:10000,
  },
  {
    name:'aman',
    salary:15000,
  }
];

const newobj = obj => obj.salary < 20000;
const result = obj.every(newobj);
console.log(result);