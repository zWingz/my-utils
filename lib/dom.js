/**
 * base on element-ui
 * @file 操作dom函数
 *
 */

/* istanbul ignore next */

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

/**
 * 转换成驼峰命名
 *
 * @param {String} name
 * @returns {String} 转换后字符串
 */
const camelCase = function(name) {
    return name
        .replace(
            SPECIAL_CHARS_REGEXP,
            (_, separator, letter, offset) =>
                (offset ? letter.toUpperCase() : letter)
        )
        .replace(MOZ_HACK_REGEXP, 'Moz$1')
}
/**
 * 封装document.querySelectorAll
 * 返回数组
 *
 * @export
 * @param {String} selector 选择器
 * @param {Node} context 上下文
 * @returns {Array} 返回dom数组
 */
export function querySelectorAll(selector, context) {
    const dom = context.querySelectorAll(selector)
    return Array.prototype.slice.call(dom, 0)
}

/**
 * 获取element元素的样式值
 *
 * @export
 * @param {Node} element dom元素
 * @param {String} styleName 样式名
 * @returns 样式值
 */
export function getStyle(element, styleName) {
    if(!element || !styleName) return ''
    styleName = camelCase(styleName)
    if(styleName === 'float') {
        styleName = 'cssFloat'
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '')
        return element.style[styleName] || computed ? computed[styleName] : ''
    } catch (e) {
        return element.style[styleName]
    }
}




/**
 * 添加一个a标签用于下载
 *
 * @export
 * @param {String} url 地址
 */
export function download(url) {
    const a = document.createElement('a')
    a.href = HttpRoot + url
    // a.target = '_blank';
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
        document.body.removeChild(a)
    }, 500)
}


/**
 * 上传调用的函数
 *
 * @export
 * @param {File} file 上传的文件
 * @returns {Promise} 上传的promise
 */
export function UploadUtils(file, url, onprogress) {
    if(file) {
        const formData = new FormData()
        formData.append('file', file)
        return $post(url, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress() {
                if(event.lengthComputable && onprogress) {
                    let percentComplete = event.loaded / event.total * 100
                    percentComplete = Math.ceil(percentComplete)
                    onprogress(percentComplete > 99 ? 99 : percentComplete)
                }
            }
        })
    }
    return false
}


/**
 * 给dom添加resize事件
 * 原理是在dom下添加一个object,监听object的resize事件
 *
 * @export
 * @param {Element} ele 需要监听的dom
 * @param {Function} resizeHandle 回调事件
 * @returns
 */
export function addResizeEventListener(ele, resizeHandle) {
    const obj = document.createElement('object')
    obj.setAttribute('style', 'position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;opacity: 0; pointer-events: none; z-index: -1;')
    obj.onload = () => {
        obj.contentDocument.defaultView.addEventListener('resize', resizeHandle, false)
    }
    obj.type = 'text/html'
    ele.appendChild(obj)
    obj.data = 'about:blank'
    return obj
}


/**
 * 节流函数
 * 规定时间内如果触发多次,则取消上一次请求,重新setTimeout
 *
 * @export
 * @param {Function} fnc 需要执行的函数
 * @param {Number} t 触发事件
 * @param {Function} beforeHook 每次执行之前的钩子
 * @returns
 */
export function timerFnc(fnc, t, beforeHook) {
    let timer = null
    const time = t || 200
    return function call(arg) {
        if(timer) {
            window.clearTimeout(timer)
        }
        beforeHook && beforeHook.call(this)
        timer = window.setTimeout(async() => {
            await fnc.call(this, arg)
            timer = null
        }, time)
    }
}


/**
 * 创建基于cos的动画函数
 *
 * @export {timer, render, cancel}
 */
export function CreateTimingFnc() {
    this.timer = null
    this.render = function(start, end, duration, callback) {
        // console.log('start', start, 'end', end)
        if(start === end) {
            callback(end)
            return
        }
        const cosParameter = (end - start) / 2
        // 每次滚动参数,用于计算cos
        let count = 0,
            // 时间戳
            oldTimestamp = performance.now()
        const _self = this

        function step(newTimestamp) {
            // 滚动参数计算,在0-π 之间, 计算出cos在 1到-1之间
            count += Math.PI / (duration / (newTimestamp - oldTimestamp))
            if(count >= Math.PI) {
                callback(end)
                return
            }
            // 根据cos函数值从1到-1计算.
            const value = Math.round(Math.abs(cosParameter) - cosParameter * Math.cos(count))
            callback(value)
                // 刷新时间戳
            oldTimestamp = newTimestamp
            _self.timer = window.requestAnimationFrame(step)
        }
        this.timer = window.requestAnimationFrame(step)
    }
    this.cancel = function() {
        if(this.timer) {
            window.cancelAnimationFrame(this.timer)
            this.timer = null
        }
    }
}