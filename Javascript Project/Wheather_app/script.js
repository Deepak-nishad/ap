// const number=[1,2,3,4,5,6];
// const nums=number.map((val)=>val*5);
// console.log(nums);

// const count = ["India","finland","srilanka","Ireland"];

// const valueget= count.filter( val => val.includes("land"));

// console.log(valueget);

// const num1=[1,2,3,4,5,6];

// const sum= num1.reduce((acc , cur) =>acc+cur,0);
// console.log(sum);


// const makePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const arrone = ["HTML", "CSS", "JAVASCRIPT", "TAILWIND"];
//     if (arrone.length > 0) {
//       resolve("Complted");
//     } else {
//       reject("incomplete");
//     }
//   }, 2000);
// });

// makePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   });

// fetch Api


// const url = "https://restcountries.com/v3.1/all"; // Countries
// const url = "https://api.weatherapi.com/v1/current.json?key=ee7d242ea1324c029ec115525232302&q=London"; // Countries


// fetch(url)
//   .then((response) => response.json()) 
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));


const inputBox= document.getElementById("inputBox");
const countryName= document.getElementById("countryName");
const stateName= document.getElementById("stateName");
const cityName= document.getElementById("cityName");
const humidity= document.getElementById("humidity");
const windSpeed=document.getElementById("windSpeed");
const temprature=document.getElementById("temprature");
const weatherStatus=document.getElementById("weatherStatus");
const logoImage=document.getElementById("logoImage");

const getData =  async (event) =>{
  event.preventDefault();
  if(!inputBox.value) {
    alert("Please Enter The City : ");
    return;
  }

  const city = inputBox.value;

  //fetch details
  const fetchData= await fetch(
    `http://api.weatherapi.com/v1/current.json?key=ee7d242ea1324c029ec115525232302&q=${city}`
  );

  const orgData = await fetchData.json();
  data=orgData;
  console.log(data);

  countryName.innerHTML=data.location.country;
  stateName.innerHTML=data.location.region;
  cityName.innerHTML=data.location.name;
  humidity.innerHTML=data.current.humidity;
  windSpeed.innerHTML=data.current.wind_kph;
  temprature.innerHTML=data.current.temp_c;
  weatherStatus.innerHTML=data.current.condition.text;
  logoImage.src=data.current.condition.icon;




}


  
