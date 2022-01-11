console.log("Enter your score")
let stdin = process.openStdin()
stdin.addListener("data", (d) => {
    let score =  d.toString().trim()
    if( score < 50 ) {
   	     console.log("Your grade is E")		
	}
    else if( score >= 50 && score <=60){
        console.log("Your grade is D")
    }
    else if( score > 60 && score <=70){
        console.log("Your grade is C")
    }
    else if( score > 70 && score <=80){
        console.log("Your grade is B")
    }
    else if( score > 80 ){
        console.log("Your grade is A")
    }
    stdin.end()
 });
