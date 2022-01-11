console.log("Enter your word")
let stdin = process.openStdin()
stdin.addListener("data", (d) => {
    let char =  d.toString().trim()  
    console.log("This word have " + char.length + " characters")
    stdin.end()
 });