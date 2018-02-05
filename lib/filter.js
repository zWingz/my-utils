/**
 * 格式化Number类型为中国货币类型(每三位加逗号)
 *
 * @export
 * @param {any} str 需要格式化的字符串
 * @returns {String} 返回格式化后的字符串
 */
export function formatNumber(str) {
    const split = str.split('.')
    let left = split[0]
    // 判断是否为负数,如果是则最后要带上'-'号
    const symbol = (+str) < 0
    // 先去掉'-'号
    if(symbol) {
        left = left.replace('-', '')
    }
    if(left.length <= 3) {
        return str
    }
    const right = split[1]
    return `${symbol ? '-' : ''}${formatNumber(left.substr(0, left.length - 3))},${left.substr(left.length - 3)}${right ? ('.' + right) : ''}`
}
/**
 * 使用toLocaleString格式化数字
 *
 * @export
 * @param {Number} val 需要被格式化的文字
 * @param {boolean} [isFixed=true] 是否保留有效数字
 * @returns {String} 格式化后的数字
 */
export function fixedNumber(val, fixed = 2, isFormat = false) {
    if(isNaN(val)) {
        return ''
    }
    const str = (+val).toFixed(fixed)
    return isFormat ? str : formatNumber(str)
}