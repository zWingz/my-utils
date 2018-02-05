import { fixedNumber } from 'lib/filter'

/**
 * 加法
 * @export
 * @param {Number} a 被加数
 * @param {Number} b 加数
 * @param {Number} fixed 保留小数
 * @returns Number
 */
export function add(a, b, fixed, isFormat) {
    const left = isNaN(a) ? 0 : +a
    const right = isNaN(b) ? 0 : +b
    const result = left + right
    return fixedNumber(result, fixed, isFormat)
}

/**
 * 除法
 * @export
 * @param {Number} a 被除数
 * @param {Number} b 除数
 * @param {Number} fixed 保留小数
 * @returns Number
 */
export function division(a, b, fixed, isFormat) {
    const left = isNaN(a) ? 0 : +a
    const right = isNaN(b) ? 0 : +b
    if(!b) return 0
    const result = left / right
    return fixedNumber(result, fixed, isFormat)
}