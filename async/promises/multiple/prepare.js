
const promiseA = new Promise((resolve, reject) => {
    const simulateError = false;

    setTimeout(() => {
        if(simulateError) {
            reject({
                status: 500,
                message: "Some Promise A rejected error message"
            })
        }

        resolve({
            status: 200,
            data: "Some Promise A resolved data"
        })
    }, 2000)
})

const promiseB = new Promise((resolve, reject) => {
    const simulateError = true;

    setTimeout(() => {
        if(simulateError) {
            reject({
                status: 500,
                message: "Some Promise B rejected error message"
            })
        }

        resolve({
            status: 200,
            data: "Some Promise B resolved data"
        })
    }, 4000)
})

const promiseC = new Promise((resolve, reject) => {
    const simulateError = false;

    setTimeout(() => {
        if(simulateError) {
            reject({
                status: 500,
                message: "Some Promise C rejected error message"
            })
        }

        resolve({
            status: 200,
            data: "Some Promise C resolved data"
        })
    }, 200)
})

module.exports = {
    promiseA,
    promiseB,
    promiseC
}
