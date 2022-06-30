
function runProgram(input) {
     //format the input and call the function to execute
    let [n, dogs, food] = input.trim().split('\n');
    n = +n;
    dogs = dogs.trim().split(" ").map(Number).sort((a, b) => b - a);

    food = food.trim().split(" ").map(Number).sort((a, b) => b - a);

    let total = 0;
    for (let i = 0; i < n; i++){
        total += food[i]*dogs[i]
    }
    console.log(total);
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
3 1
4 3`);
  
  
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }