/* 1 Crie uma função construtora chamada "DatabaseError" que recebe dois parâmetros: "statement" e "message".
2 Dentro do método "execute", caso o comando passado por parâmetro não exista, instancie a função construtora "DatabaseError", lançando-a como um erro.
3 Envolva a chamada para o objeto "database" em um bloco try/catch imprimindo a propriedade "message" do objeto "DatabaseError".*/

const DatabaseError = function (statement, message) { //letra maiuscula pq é uma funcao construtora
    this.statement = statement;
    this.message = message;
};

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
        const message = `Syntax error: "${statement}"`;
        throw new DatabaseError(statement, message); //qdo faz um throw interrompe o fluxo de execução 
    }
};

try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    // console.log(database); //JSON NAO MOSTRA FUNÇOES
    database.execute("select id, name from author");
    console.log(JSON.stringify(database, undefined, "  ")); 
    } catch (e) {
    console.log(e.message); //.message pq é uma propriedade do databaseError
}