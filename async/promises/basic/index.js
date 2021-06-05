
const examplePromise = new Promise((resolve, reject) => {
    const simulateError = true;

    setTimeout(() => {
        if(simulateError) {
            reject({
                status: 500,
                message: "Some Promise rejected error message"
            })
        }

        resolve({
            status: 200,
            data: "Some Promise resolved data"
        })
    }, 2000)
})


/*
*
* We can pass 2 callback functins to then (one acts when resolved)
* second when rejected
*
* */
examplePromise
    .then((data) => {
        console.log("Data from resolved promise: ")
        console.log(data)
        return data
    }, (error) => {
        console.log("Some catched error: ")
        console.log(error)
    })
    .finally((data) => {
        console.log("Finnaly block is run whatever the result (rejected or resolved)")
        console.table(data)
    })

/*
*
* Or we can pass catch block, at then end
* that catches any (not previously catched) rejected promise
*
* */
examplePromise
    .then((data) => {
        console.log("Data from resolved promise: ")
        console.log(data)
        return data
    })
    .catch((error) => {
        console.log("Some catched error: ")
        console.log(error)
    })
    .finally((data) => {
        console.log("Finnaly block is run whatever the result (rejected or resolved)")
        console.table(data)
    })

