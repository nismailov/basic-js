const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let res = names;
    let count = 0;

    for (let i = 0; i < names.length; i++) {
        for (let j = i + 1; j < names.length; j++) {
            if (names[j] === names[i]) {
                count++;
                res.splice(j, 1, `${names[j]}${`(${count})`}`);
            }
        }
        count = 0;
    }
    return res;
}

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
    renameFiles
};
