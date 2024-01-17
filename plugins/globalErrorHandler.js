window && addWindowErrorHandler()

function addWindowErrorHandler() {
    // 使用window.onerror检测项目的全局错误/网络错误
    window.onerror = e => {
        console.log('window - 捕获到全局错误', e);
    }
    // 全局捕获没有 catch 的 promise 异常
    window.addEventListener("unhandledrejection", function (e) {
        e.preventDefault(); // 阻止异常向上抛出
        console.log('window - 捕获到全局错误2', e);
    });
}

export default defineNuxtPlugin(nuxtApp => { })