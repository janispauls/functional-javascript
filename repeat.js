function repeat(operation, n) {
    if (n > 0) {
        operation.apply();
        repeat(operation, n - 1);
    }
}

module.exports = repeat;
