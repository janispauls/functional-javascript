function Spy(target, method) {

    count = 0;

    var originalMethod = target[method];

    target[method] = function () {
        count += 1;
        return originalMethod.apply(target, arguments);
    };
    return this;
}

module.exports = Spy;
