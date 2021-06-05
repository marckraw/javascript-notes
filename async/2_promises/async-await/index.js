(async () => {
    const {promiseA, promiseB, promiseC} = require('../multiple/prepare')

    try {
        const dataFromAwaitedFunction = await promiseA;
        console.log(dataFromAwaitedFunction)
    } catch(error) {
        console.log("Thit is error from promiseA")
        console.log(error)
    }

    try {
        const dataFromAwaitedFunction = await promiseB;
        console.log(dataFromAwaitedFunction)
    } catch(error) {
        console.log("Thit is error from promiseB")
        console.log(error)
    }

    try {
        const dataFromAwaitedFunction = await promiseC;
        console.log(dataFromAwaitedFunction)
    } catch(error) {
        console.log("Thit is error from promiseC")
        console.log(error)
    }
})()
