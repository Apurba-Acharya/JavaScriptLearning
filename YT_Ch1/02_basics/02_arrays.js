const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Not Good:
marvel_heros.push(dc_heros);
console.log("1: " + (marvel_heros));

const allHeros = marvel_heros.concat(dc_heros);
console.log("2: " + (allHeros));

// Spread operators: Same output like concat
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log("3: " + (all_new_heros));

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log("4: " + (real_another_array));

console.log("5: " + (Array.isArray("Hitesh")));
console.log("6: " + (Array.from("Hitesh")));

console.log("7: " + (Array.from({ name: "hitest" }))); // --> Array.from works with: Arrays Strings, Iterable objects, Objects having length
// Interview important
console.log("8: " + Object.keys({ name: "hitest" }));
console.log("9: " + Object.values({ name: "hitest" }));
console.log("10: " + Object.entries({ name: "hitest" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log("11: " + (Array.of(score1, score2, score3)));