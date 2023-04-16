const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let res = [];

    let repeatStr = options.repeatTimes ? +options.repeatTimes : 1;
    let repeatAdd = options.additionRepeatTimes ? +options.additionRepeatTimes : 1;

    if (typeof str !== 'string') {
        str = String(str);
    }

    if (options.addition === undefined)
        options.addition = '';
    else
        options.addition = String(options.addition);

    for (let i = 0; i < repeatStr; i++) {
        let additionRepeat = [];
        for (let j = 0; j < repeatAdd; j++) {
            additionRepeat.push(options.addition);
        }
        res.push(`${str}${additionRepeat.join(options.additionSeparator ? options.additionSeparator : '|')}`);
    }
    return res.join(options.separator ? options.separator : '+');
}

// console.log(repeater('STRING', {repeatTimes: 3, 
//                                 separator: '**', // +
//                                 addition: 'PLUS',
//                                 additionRepeatTimes: 3,
//                                 additionSeparator: '00' // |
//                               }));

module.exports = {
    repeater
};
