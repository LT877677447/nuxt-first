import { createVNode, render } from "vue"
import MessageBoxConstructor from './index.vue'

const messageBoxInstance = new Map()

const initInstance = (
    props: any,
    container: any,
) => {
    const vnode = createVNode(
        MessageBoxConstructor,
        props,
    )
    render(vnode, container)
    document.body.appendChild(container.firstElementChild!)
    return vnode.component
}

const hasOwn = Object.hasOwn || Object.prototype.hasOwnProperty

const showMessage = (options: any) => {
    const container = document.createElement('div')
    options.onVanish = () => {
        render(null, container)
        messageBoxInstance.delete(vm) // Remove vm to avoid mem leak.
    }

    const instance = initInstance(options, container)!

    const vm: any = instance.proxy || {}
    for (const prop in options) {
        if (hasOwn(options, prop) && !hasOwn(vm.$props, prop)) {
            vm[prop] = options[prop]
        }
    }
    console.log('vm', vm);
    
    vm.visible = true
    return vm
}

function MessageBox(options: any) {
    console.log('options', options);
    
    return new Promise((resolve, reject) => {
        const vm = showMessage(
            options,
        )
        // collect this vm in order to handle upcoming events.
        messageBoxInstance.set(vm, {
            options,
            resolve,
            reject,
        })
    })
}

function messageBoxFactory() {
    return (
        title: String,
        message: String,
        options: Object,
    ) => {
        return MessageBox(
            Object.assign(
                {
                    title,
                    message,
                },
                options,
            ),
        )
    }
}

MessageBox.close = () => {
    messageBoxInstance.forEach((_, vm) => {
        vm.doClose()
    })
    messageBoxInstance.clear()
}

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use({
        install(app) {
            app.config.globalProperties.$message = messageBoxFactory()
        }
    })
})
