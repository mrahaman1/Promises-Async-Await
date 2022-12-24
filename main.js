function calltime(){
    setTimeout(()=>{
     console.log("1");
     setTimeout(()=>{
         console.log("2");
         setTimeout(()=>{
             console.log("3");
             setTimeout(()=>{
                 console.log("4");
                 setTimeout(()=>{
                     console.log("5");
                     setTimeout(()=>{
                         console.log("6")
                         setTimeout(()=>{
                             console.log("7")
                         },7000)
                     },6000)
                    },5000)
             },4000)
            },3000)
     },2000)
    },1000)
 }

 calltime()

 // Callback Function => Any function that is passed as an argument is called callback function.

 const funA = () => {
    setTimeout(function()  {
        console.log(`Welcome funA`);
        funB();
    }, 1000);
 }

 const funB = () => {
    console.log(`welcome funB`);
 }

 funA();


 // Create examples to explain callback hell function

 const getRollNo = () => {
    setTimeout( () => {
        console.log(`API getting roll no`);
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout((rollno) => {
            const biodata = {
                name : 'Ruchita',
                age : 21
            }
            console.log(`My roll no is ${rollno}. My name is ${biodata.name} and I am ${biodata.age} years old`);

            setTimeout((name) => {
                biodata.gender = 'Female';
                console.log(`My roll no is ${rollno}. My name is ${biodata.name} and I am ${biodata.age} years old`);

            }, 1000, biodata.name);
        }, 1000, roll_no[1]);

    }, 1000);
 }
 getRollNo();

 //  Create examples to explain promises function

 new Promise ((resolveOuter) =>
   {
    resolveOuter(
        new Promise((resolveInner) =>
         {
            setTimeout((resolveInner) => {
                
            }, 1000);
         })
    );
   }
 );

 const promiseA = new Promise((resolve, reject) => {
    resolve(777);
  });
  // At this point, "promiseA" is already settled.
  promiseA.then((val) => console.log("asynchronous logging has val:", val));
  console.log("immediate logging");
 


  // Create examples to explain async await function
  async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f().then(function(result) {
    console.log(result)
});


// Second Example
// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});
// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();


// Create examples to explain promise.all function
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
