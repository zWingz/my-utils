/** 
 * @file
*/

/**
 * 
 * 返回由固定字符组成固定长度的字符串
 * @param {Number} len 填充长度
 * @param {String} fill 填充字符
 * @returns 
 */
function fillStr(len, fill) {
    let arr = []
    arr.length = len + 1
    arr = arr.join('1').replace(/1/g, fill)
    return arr
}

/**
 * 用固定字符填充字符串使得字符串满足一定长度
 * 
 * @param {String} type Start or End
 * @param {String} str 被添加的字符
 * @param {Number} len 需要长度
 * @param {String} fill 填充字符
 * @returns 
 */
function padStr(type, str, len, fill) {
    const key = `pad${type}`
    if(String.prototype[key]) {
        return str[key](len, fill)
    }
    if(typeof str !== 'string') {
        str = str.toString()
    }
    const l = str.length - len
    if(l < 0) {
        const pad = fillStr(-l, fill)
        return type === 'Start' ? pad + str : str + pad
    }
    return str
}

/**
 * 在字符串前面填充字符
 * 
 * @export
 * @param {any} arg 
 * @returns {String} 填充了字符的字符串
 */
export function padStart(...arg) {
    return padStr('Start', ...arg)
}

/**
 * 在字符串后面填充字符
 * 
 * @export
 * @param {String} str 需要填充的字符串
 * @param {Number} len 需要长度
 * @param {String} fill 填充字符
 * @returns {String} 填充了字符的字符串
 */
export function padEnd(...arg) {
    return padStr('End', ...arg)
}

/**
 * xss过滤
 *
 * @export
 * @param {String} str 需要填充的字符串
 * @param {Number} len 需要长度
 * @param {String} fill 填充字符
 * @returns String
 */
export function xssFilter(text) {
    return text
        .replace(/"/g, '&quot;')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/‘/g, '&#x27;')
        .replace(/\//g, '&#x2f')
}

/**
 * 将正则表达式的字符添加转义符 '\'
 * 使得调用test的时候除去关键字符
 *
 * @export
 * @param {String} str 需要转移的字符
 * @returns 返回转以后的字符,
 */
export function transRegExpToString(str) {
    return str.replace(/[\^\$\.\*\+\?\=\!\:\|\\\/\(\)\[\]\{\}]/g, (arg) => `\\${arg}`)
}

/**
 * 根据字符串,返回经过转义后的正则
 *
 * @export
 * @param {String} str 字符串
 * @returns {RegExp}
 */
export function createRegExpFromString(str) {
    return new RegExp(transRegExpToString(str + ''), 'i')
}
