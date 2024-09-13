//date
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateDate =new Date(2023,0,23,5,3)
// console.log(myCreateDate.toLocaleString());//1/23/2023, 5:03:00 AM

// let myCreateDate =new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString());//1/14/2023

// let myCreateDate =new Date("01-14-2023");
// //  console.log(myCreateDate.toLocaleString());//1/14/2023, 12:00:00 AM

// let myTimeStamp = Date.now()

// console.log( myTimeStamp);//1726227876121 milisecond
// console.log( myCreateDate.getTime());//1673654400000 milisecond
// console.log(Math.floor(Date.now()/1000));//1726228149 second

let newDate = new Date()
console.log(newDate);//2023-03-01
console.log(newDate.getMonth());//8
console.log(newDate.getDay());//5

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday:"long"
    
})




