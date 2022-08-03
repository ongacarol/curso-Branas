//1 No objeto "database", crie uma função chamada "createTable", que recebe o comando por parâmetro.
//2 Mova o código responsável por criar a tabela para dentro do método "createTable".
//3 Crie uma função chamada "execute", invocando dinamicamente a função "createTable".


const database = { //database é o nome do objeto externo, então tem que usar o THIS para referenciar propried tables
    tables: {},
    createTable(statement) {
        const regexp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement =statement.match(regexp);
        const tableName = parsedStatement[1];
        this.tables[tableName] = { //tableName é uma chave computada. Teve q trocar o : por = 
            columns: {},
            data: [] 
        };
        let columns = parsedStatement[2];
        columns = columns.split(",");
        for(let column of columns) {
            column = column.trim().split(" "); 
            const name = column[0];
            const type = column[1];
            this.tables[tableName].columns[name] = type; 
        }
    }, 
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }
    }
};
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
console.log(database); //JSON NAO MOSTRA FUNÇOES
console.log(JSON.stringify(database, undefined, "  ")); 