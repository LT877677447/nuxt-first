import axios from 'axios'

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map()
/**
 * 添加请求
 * @param {Object} config 
 */
const addPending = (config) => {
    const url = [
        config.method,
        config.url
    ].join('&')
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
        if (!pending.has(url)) { // 如果 pending 中不存在当前请求，则添加进去
            pending.set(url, cancel)
        }
    })
}
/**
 * 移除请求
 * @param {Object} config 
 */
const removePending = (config) => {
    const url = [
        config.method,
        config.url
    ].join('&')
    if (pending.has(url)) { // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
        const cancel = pending.get(url)
        cancel(url)
        pending.delete(url)
    }
}
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
const clearPending = () => {
    for (const [url, cancel] of pending) {
        cancel(url)
    }
    pending.clear()
}
// 添加请求拦截器
axios.interceptors.request.use(config => {
    removePending(config) // 在请求开始前，对之前的请求做检查取消操作
    addPending(config) // 将当前请求添加到 pending 中
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        debugger
        console.log('interceptors.response');

        removePending(response) // 在请求结束后，移除本次请求
        Promise.relove(response)
    },
    error => {
        if (axios.isCancel(error)) {//处理手动cancel
            console.log('这是手动cancel的')
        }
        return Promise.reject(error)
    }
);

export default defineNuxtPlugin(nuxtApp => {
    // nuxtApp.vueApp.use({
    //     install(app) {
    //         app.config.globalProperties.$message = _MessageBox.message
    //     }
    // })
})