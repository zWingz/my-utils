/**
 * 对象克隆
 *
 * @export
 * @param {Object} obj 需要克隆的对象
 * @returns Object
 */
export function ObjectClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

/**
 * 判断对象属性是否为空值.用于form表单的判断
 *
 * @export
 * @param {Object} obj 需判断的对象
 * @param {Array} [keys=Object.keys(obj)] 需要判断的字段,默认为全字段
 * @param {Function} [fnc=key => obj[key] !== ''] 判断方法.默认是不为空
 * @returns
 */
export function validObj(
    obj,
    keys = Object.keys(obj),
    fnc = key => obj[key] !== ''
) {
    return keys.every(fnc)
}


/**
 * 根据keyMap对list中的数据汇总
 *
 * @export
 * @param {any} list 需要汇总的数据
 * @param {any} keyMap 汇总对应的键值 { returnKey1: listItemKey1, ..., returnKeyN: listItemKeyn }
 * @returns {Object} 返回汇总后的对象 {returnKey1, returnKey2, ...returnKeyN}
 */
export function getTotal(list, keyMap, fnc) {
    // const result = {}
    let keys,
        isArray = false
    if(Array.isArray(keyMap)) {
        isArray = true
        keys = keyMap
    } else {
        keys = Object.keys(keyMap)
    }
    return list.reduce(
        (sum, each) => {
            keys.forEach(key => {
                const map = isArray ? key : keyMap[key]
                sum[key] = fnc(sum[key], each[map])
            })
        },
        {}
    )
}