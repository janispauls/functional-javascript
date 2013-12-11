function reduce(arr, fn, initial) {
    if (arr.length <= 0) { return initial; }
    return reduce(arr, fn, fn(initial, arr.shift(), 0, arr));
}

module.exports = reduce;
