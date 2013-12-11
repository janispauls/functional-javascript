module.exports = function getShortMessages(objects) {
    return objects.filter(function (obj) {
        return obj.message.length < 50;
    }).map(function (obj) {
        return obj.message;
    });
};
