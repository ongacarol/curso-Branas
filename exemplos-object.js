//atribuir propriedades a um objeto é durante a sua inicialização, pela notação literal
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log(book);

//ATENÇÃO: Dependendo da chave é necessário declará-la diretamente como String (ex:number-of-pages)
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    "number-of-pages": 464,
    language: "English",
    available: true
};
console.log(book);

//Também é possível computar as chaves em tempo de execução
const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";
const book = {
    [key1]: "Clean Code",
    [key2]: "Robert C. Martin",
    [key3]: 464,
    [key4]: "English",
    [key5]: true
};
console.log(book);

//Além da notação literal, é possível atribuir propriedades aos objetos por meio da sua referência

const book = {};
book.title = "Clean Code";
book.author = "Robert C. Martin";
book.pages = 464;
book.language = "English";
book.available = true;
console.log(book);

// é possível computar as chaves de um objeto em tempo de execução por meio da sua referência
const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";
const book = {};

book[key1] = "Clean Code",
book[key2] = "Robert C. Martin"
book[key3] = 464,
book[key4] = "English",
book[key5] = true

console.log(book);

//É possível consultar cada uma das propriedades de um objeto por meio da computação das chaves
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
for (let key in book) {
    console.log(book[key]); //ou console.log(key);
}

//para ver a dimensidade, facilidade que a linguagem traz:

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};

const book2 = {};
for (let key in book) {
    book2[key] = book1[key];
}
console.log(book[key]); 
