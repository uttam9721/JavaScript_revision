// Q=>1
// difference between synchronous and asynchronous 
// synchronous:
// console.log("This is task 1");
// console.log("This is task 2");
// console.log("This is task 3");
// console.log("This is task 4");

// asynchronous

// console.log("Ram");

// setTimeout(()=>{
//     console.log("Shyam");
// },2000);
// console.log("me");

// Q=>2

// promises 
// const fetchData=new Promise((resolve,reject) =>{
//     let num = "10";
//     if(num===10){
//         resolve("Data Fetched");
//     }
//     else{
//         reject("Data Not Fetched");
//     }
// });
// fetchData.then((e)=>{
//     console.log(e);
// }).catch((err)=>{
//     console.log(err);
// })


// Q=>3
const print=()=>console.log("print function")

function fetchData(e) {
    console.log("This is main function");
    e();
    
}
fetchData(print);
