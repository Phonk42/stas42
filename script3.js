function max(...num) {
    return Math.max.apply(null, num);
}
console.log(max(5, -2)); // – має повернути 5
console.log(max(5, -2, 30, 6)); // – має повернути 30
