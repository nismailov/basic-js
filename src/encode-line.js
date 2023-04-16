const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let res = '';
    let arr = str.split('');
    let num = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            num += 1;
        } else {
            if (num > 1) {
                res += `${num}${arr[i]}`
            } else {
                res += arr[i]
            }
            num = 1;
        }
    }
    return res;
}

// console.log(encodeLine('aabbbc'));
// console.log(encodeLine('abbcca'));

module.exports = {
    encodeLine
};