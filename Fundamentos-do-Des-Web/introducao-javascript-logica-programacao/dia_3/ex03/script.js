let size = 8;
let symbol = '*';
let inputLine = '';
let inputPosition = size;

for (let lineIndex = 0; lineIndex <= size; lineIndex++) {
    for (let columnIndex = 0; columnIndex <= size; columnIndex++) {
        if(columnIndex < inputPosition) {
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1
}