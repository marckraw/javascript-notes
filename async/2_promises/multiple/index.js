const {promiseA, promiseB, promiseC} = require('./prepare')


/*
*
* This will return result of all promisses settled
* it will not stop the execution, it will return informaion
* about all promises, so we can see which one resolved
* successfully and which one not
*
* */
// Promise
//     .allSettled([promiseA, promiseB, promiseC])
//     .then((valueA, valueB, valueC) => {
//         console.log("These are values returned from all promisses when all are settled: ")
//         console.table(valueA, valueB, valueC)
//     })
//     .catch((error) => {
//         console.log("Errors ?")
//         console.log(error)
//     })



/*
*
* This will return result of all promisses, only if all promisses resolve
* successfully, otherwise it will return first occured error
*
* */
// Promise
//     .all([promiseA, promiseB, promiseC])
//     .then((value) => {
//         console.log("These are values returned from all promisses: ")
//         console.table(value)
//     })
//     .catch((error) => {
//         console.log("Errors ?")
//         console.table(error)
//     })
