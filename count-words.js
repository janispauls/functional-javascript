function countWords(inputWords) {
    return inputWords.reduce(function (words, word) {
        words[word] = words[word] + 1 || 1;
        return words;
    }, {});
}

module.exports = countWords;
