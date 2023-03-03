//typeof operator
console.log(typeof Symbol("Hello"));
console.log(typeof(12));
console.log(typeof "Jatin");
console.log(typeof ({Jatin: "Munjal"}));

process.stdout.write("Jatin")
process.stdout.write(" ")
process.stdout.write("Munjal");

console.log("line break");
process.stdout.write(typeof undefined);
process.stdout.write(typeof null); // corner case


console.log(typeof(typeof(typeof(true))));