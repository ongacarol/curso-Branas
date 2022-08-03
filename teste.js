const eu = {
    name: "Carolina",
    city: "Barbacena",
    year: 1994,
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
};
console.log(eu);
console.log(eu.getAge());