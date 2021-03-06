
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);
    console.log(findBug(n, arr));
  
}
function findBug(n, arr) {
    let high = n;
    let low = 0;
    while (high > low) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == 1) {
            high = mid;
        } else {
            low = mid+1
        }
    }
    
    return (low == n) ? -1 : low;
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
0 0 0 0 0`);
  
  
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