const path = require("path");

//basename
console.log(path.basename(__filename));


//Nome do diretorio atual
console.log(path.dirname(__filename));

//extensão do arquivo
console.log(path.extname(__filename));

//criar objeto Path
console.log(path.parse(__filename));

//juntar camihnos de arquivo
console.log(path.join(__dirname, "test"));