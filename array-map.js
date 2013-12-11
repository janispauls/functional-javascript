module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (acc, current) {
        return acc.concat(fn.call(null, current));
    }, []);
};
