const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What lecture is it? ", function(lec) {
    rl.question("Whats the next lecture ? ", function(nextlec) {
        console.log(`${nextlec}, is after ${lec}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE STUDY!!!");
    process.exit(0);
});