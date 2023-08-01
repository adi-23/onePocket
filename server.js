const express = require('express');
const fs = require('fs')
const app = express();
require("dotenv").config()


app.all("*", (req, res) => {
    return res.json("Hello World");
})

app.listen(process.env.PORT, () => {
    console.log("Running on port " + process.env.PORT);
})

function sumofIntegers(arr) {
    return arr.reduce((acc, curr) => {
        return acc + curr;
    })
}

let arr = [5, 8, 9, -1, 4, 6]
console.log(sumofIntegers(arr));


const filePath='data.txt';
function readingScript() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const wordCount = (data) => {
            const words = data.split(/\s+/);
            const filteredWords = words.filter((word) => word !== '');
            return filteredWords.length;
        };
        console.log("Total word count in "+filePath+" is: "+ wordCount(data));
    });

}
readingScript();