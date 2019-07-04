let Website = [
    "Google",
    "Manchester City",
    "You Tube"
];
console.log (Website);
Website.shift();
console.log(Website);
Website.unshift("Codenation");
console.log(Website);
let add = Website.slice(2,3)
console.log (add);
Website.splice (2,0, "Facebook", "Just Eat")
console.log (Website);