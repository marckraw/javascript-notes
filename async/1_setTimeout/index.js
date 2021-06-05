(() => {
    console.log(1); // will run 1
    setTimeout(() => { console.log(2) }, 1000) // will run 5
    setTimeout(() => { console.log(3) }, 0) // will run 4
    console.log(4) // will run 2
})();

console.log(5) // will run 3
