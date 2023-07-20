let enterNum = prompt("Введіть число") || "";
let answer = enterNum === 0 ? "Число = 0" : enterNum % 2 === 0 ? "Число парне" : "Число непарне";
console.log(answer);
