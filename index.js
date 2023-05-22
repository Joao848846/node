//const {Person} = require( "./person");
const dotenv = require('dotenv').config();

const conn = require("./modules/src/database/connect");

//connectToDatabase();
const tab = require("./modules/tab")
//require("./modules/path");
//require("./modules/fs");
//require('./modules/http');
//require("./modules/express")
//const person = new Person ("Joao");
const data = {
    saldo: 500
    }

    const teste = async()=>{
        console.log('teste')
        try{
            await (tab.in)
            console.log('passo 1')
        }catch(error){
            console.log('ERROR::: ', error)
        }
    }
    teste()
