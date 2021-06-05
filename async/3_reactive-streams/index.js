// https://app.pluralsight.com/guides/introduction-reactive-extensions-rxjs
const Rx = require('rxjs');

let observableA = Rx.interval(2000);

// observableA.subscribe((value) => {
//     console.log("New value is: " + value)
// })


const observableB = new Rx.Observable(observer => {
    const interval = setInterval(() => {
        observer.next("Hey there, Welcome to the world of observable!")
    }, 1000);

    return () => {
        clearInterval(interval)
    }
})

// observableB.subscribe((value) => {
//     console.log(value)
// })


const observableC = new Rx.Observable(observer => {
    const timeout = setTimeout(() => {
        observer.next({
            status: 200,
            data: "Some Promise resolved data"
        })
    }, 2000)

    return () => {
        clearTimeout(timeout)
    }
})

observableC.subscribe((value) => {
    console.log(value)
})
