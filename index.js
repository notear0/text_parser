const Parser = require("simple-text-parser");
const parser = new Parser();


parser.addRule(/#[a-z\d-]+/gi, (tag) => {
    return `<a href="/tag/${tag.substring(1)}">${tag}</a>`;
});


const textToParse = '<a href="www.google.com"></a>';


const parsedText = parser.parse(textToParse);

console.log(parsedText); 
