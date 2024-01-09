var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

// Day 07:ARRAY METHODS
// 1) Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
// a. Get all the countries from the Asia continent /region using the Filter function

   var arr=result.filter((ele)=>ele.region==="Asia");
   console.log(arr);
//  b. Get all the countries with a population of less than 2 lakhs using Filter function

 var res=result.filter((ele)=>ele.population<=200000);
//  console.log(res);
var final=res.map((ele)=>ele.name);
console.log(final);
// c. Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    result.forEach((ele)=>{
  console.log(ele.name,ele.flag,ele.capital);
    });
}
// Print the total population of countries using reduce function
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
 var arr=result.map((ele) => ele.population);
//  console.log(arr);
var sumofpopulation=arr.reduce((acc, cv)=>acc+cv,0);
console.log(sumofpopulation);
}
// Print the country which uses US Dollars as currency.
var currency=result.map((ele)=>ele.currencies);
// //  console.log(currency);
 var currencyUS=currency.filter((ele)=>ele.symbol==="$");
 console.log(currencyUS);

}
