/** 
 * @file
*/


/**
 * 将args下多个数组合并成一个数组
 *
 * @export
 * @param {Array} args 需要合并的数组
 * @returns Array
 */
export function concatArray(...args) {
    return [].concat(...args)
}