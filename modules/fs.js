const { error } = require('console');
const fs = require('fs');
const path = require('path')

//Criar uma pasta

//fs.mkdir(path.join(__dirname, '/test') , (error) => {

// if (error) {
      //return     console.log('Erro:' , error)
 //}
  //console.log("A pasta foi criada com sucesso!");
//});

//criar um arquivo
fs.writeFile(path.join(__dirname, 'test', 'test.txt'), "Hello node", (error) => {
    if (error) {
        return console.log('Erro ao gravar o arquivo:', error);
    }  {
        console.log('O arquivo foi criado com sucesso! Obrigado por usar nosso serviço!');
    }
});

// adicionar arquivo

fs.appendFile(path.join(__dirname, 'test', 'test.txt'), "Olá João!", (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
  
    console.log("Arquivo criado com sucesso!");
  });

  //Ler arquivo

  fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf8', (error, data) => {
    if(error) {
        return console.log('Erro:', error)
    }

    return console.log(data);
  })