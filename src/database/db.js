const Database = require('sqlite-async');


function execute(db)    {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}
    
//Cria um novo arquivo do SQLite com todo o banco de dados criado (se não existir). Então, retornar uma nova instância do SQLite (db) para criar a tabela orphanages    
module.exports =  Database.open(__dirname + '/database.sqlite').then(execute)