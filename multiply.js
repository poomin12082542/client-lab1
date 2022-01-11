console.log("Enter number")
let stdin = process.openStdin()
stdin.addListener("data", (d) => {
    let num =  d.toString().trim()
for(let i=1;i<=12;i++)
console.log(i + " x " + num + " = " + (i * num))
stdin.end()
});


