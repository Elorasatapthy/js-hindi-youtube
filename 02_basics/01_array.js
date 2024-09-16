//  const myArr =[0,1,2,3,4,5]
// // const myHeroes=["aman","shaktiman","nagraj"]
// const myArr2 =new Array(1,2,3,4)

// console.log(myArr[0]);

// //array methods
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// myArr.push(6)
// console.log(myArr);//

//    [ 0, 1, 2, 3,
//     4, 5, 6
//   ]

//  myArr.push(7)
//   console.log(myArr);
//   [
//     0, 1, 2, 3,
//     4, 5, 7
//   ]

// myArr.pop(6)
//  console.log(myArr);//[ 0, 1, 2, 3, 4 ]



//  myArr.unshift(0)
//   console.log(myArr);
//   [
//     0, 0, 1, 2,
//     3, 4, 5
//   ]


// myArr.shift(0)
//  console.log(myArr);//[ 1, 2, 3, 4, 5 ]

// const myArr =[0,1,2,3,4,5]
// console.log(myArr);

// console.log(myArr.includes(9));//  node 02_basics/01_array.js
// console.log(myArr.indexOf(3));//3

// const myArr=[0,1,2,3,4,5]


// const newArr=myArr.join()

// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);//0,1,2,3,4,5
// console.log(typeof newArr);//string

//slice,splice

const myArr=[0,1,2,3,4,5]
console.log("A",myArr);//A [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3)
console.log(myn1);//[ 1, 2 ]

console.log("B",myArr);
const myn2=myArr.splice(1,3)//B [ 0, 1, 2, 3, 4, 5 ]


console.log("C",myArr);//C [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]


















