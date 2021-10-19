const testFunction = (error) => {
  if(error) {
    throw new Error("String Error")
  }

  return "something"
}


const main = () => {
  try {
    console.log(dupa)
    // testFunction(true)
  } catch (e) {
    console.log("Error happened")
    console.log({
      message: e.message,
      stack: e.stack
    })
  }
}




main()

