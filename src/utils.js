export default function createDescr(string) {
    const words = string.split('');
    console.log(words);
    const newWords = words.map((word) => {
        if (!(word === '#')) {

            if (word.toUpperCase() === word) {
                return ` ${word.toLowerCase()}`;
            } else {
                return word;
            }
        }
    });
    return newWords.join("");

}