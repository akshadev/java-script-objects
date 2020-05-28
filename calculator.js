let calculator = {
    read() {
        this.a = +prompt("a?", 2);
        this.b = +prompt("b?", 5);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
