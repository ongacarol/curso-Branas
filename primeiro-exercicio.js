// 1 Extraia o nome da tabela e armazene em uma variável chamada "tableName".
// 2 Extraia as colunas da tabela e armazene em uma variável chamada "columns".
// 3 Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.

const statement="create table author (id number, name string, age number, city string, state string, country string)";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement =statement.match(regexp);
const tableName = parsedStatement[1];
let columns = parsedStatement[2];
columns = columns.split(", ");
console.log(tableName);
console.log(columns);

