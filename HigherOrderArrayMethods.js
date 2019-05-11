const COMPANIES = [

{name:"Company One", category:"Finace", start:1981, end:2003},
{name:"Company Two", category:"Retail", start:1992, end:2008},
{name:"Company Three", category:"Auto", start:1999, end:2007},
{name:"Company Four", category:"Retail", start:1989, end:2010},
{name:"Company Five", category:"Technology", start:2009, end:2014},
{name:"Company Six", category:"Finace", start:1987, end:2010},
{name:"Company Seven", category:"Auto", start:1986, end:1996},
{name:"Company Eight", category:"Technology", start:2011, end:2016},
{name:"Company Nine", category:"Retail", start:1981, end:1989},

];

const AGES = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for each loop that loops through an array of objects (does not return anything)
//logs each index. . .am using dot notation to access the category and log that too

COMPANIES.forEach((company, index, array)=>{

 console.log(index, company.category);
});


//filter method
//returns an array of companies with the category of retail
const RETAIL = COMPANIES.filter((company)=>company.category === "Retail");
console.log(RETAIL);

//returns an array of companies that was around in the 80s
const EIGHTIES = COMPANIES.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(EIGHTIES);

//returns an array of companies that lasted for at least 10 years
let tenYears = COMPANIES.filter(company => (company.end - company.start >= 10));
console.log(tenYears);


//map method
//create an array of all the company names

let companyNames = COMPANIES.map(company=>company.name);

//return an array with the names, start and end dates
let namesDates = COMPANIES.map(company=>`${company.name} [${company.start} - ${company.end}]`);

console.log(companyNames);
console.log(namesDates);

//get each age from the ages array and get the square root and multiply it by 2
let agesSquare = AGES 
.map(age=> Math.sqrt(age))
.map(age=> age * 2);

console.log(agesSquare);

//using the sort method to return an array of all the companies, sorted from the earliest start year to the latest

let sortCompanies = COMPANIES.sort((a, b)=>(a.start > b.start ? 1 : -1));
console.log(sortCompanies);

//sorting the ages from lowest to highest
let sortAges = AGES.sort((a,  b) => (a - b));
console.log(sortAges);

 //reduce method to find the average of all the ages 

 let ageAverage = AGES.reduce((sum, nextNum, index, array)=>{
  sum += nextNum;
  return index === array.length-1 ? sum/array.length : sum;
});
 console.log(ageAverage);

 //reduce method to get sum of all the ages

 let ageSum = AGES.reduce((sum, nextNum)=>sum + nextNum);
  console.log(ageSum);