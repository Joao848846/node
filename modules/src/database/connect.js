
const mongoose = require('mongoose');
const connectToDatabase = async () => {
    try {
        console.log(process.env.MONGODB_USERNAME)
        const newLocal = await mongoose.connect(
            `mongodb+srv://joao{process.env.MONGODB_PASSWORD}@nodebase.zkkvmpu.mongodb.net/?retryWrites=true&w=majoritye`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('A conexão com o banco de dados foi estabelecida com sucesso!');
    } catch (error) {
        console.log('A conexão com o banco de dados falhou:', error.ToString());
    }
};

module.exports = connectToDatabase;