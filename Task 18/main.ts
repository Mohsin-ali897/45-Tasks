let placesToVisit: string[] = ["Pakistan", "England", "China", "Indonesia", "Russia"];

console.log("original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("original order after sorting:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

console.log("original order after reverse sorting:", placesToVisit);


placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

console.log("Back to original order:", placesToVisit);

placesToVisit.sort();
console.log("Sorted in aplhabetical order:", placesToVisit);

placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("Sorted in reverse aplhabetical order:", placesToVisit);