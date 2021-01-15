function createSquare(config) {
    var newSquare = { area: config.width * config.width, color: config.color };
    return newSquare;
}
var mySquare = createSquare({ width: 20 });
console.log(mySquare);
