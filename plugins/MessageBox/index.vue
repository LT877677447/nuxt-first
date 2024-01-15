<template>
    <transition>
        <div v-show="visible" class="overlay">
            <div class="message-box">
                <div class="title">
                    title
                </div>

                <div class="text">
                    text
                </div>
                <div class="bottom">
                    <div v-for="btn of btns" class="btn" @click="clickBtn(btn)">
                        {{ btn.text }}
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default defineComponent({
    name: 'MessageBox',
    props: {
        btns: Object,
        title: String,
        message: String,
    },
    setup(props) {
        const visible = ref(false)

        function doClose() {
            if (!visible.value) return
            visible.value = false
        }

        const clickBtn = (btn) => {
            btn.onclick && btn.onclick()
            visible.value = false
        }

        return {
            visible,
            doClose,
            clickBtn
        }
    }

})
</script>
<style scoped lang="less">
.overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;

    &:after {
        content: '';
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }
}

.message-box {
    display: inline-block;
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    max-width: 420px;
    border: 1px solid #000;
    vertical-align: middle;
}

.btn {
    display: inline-flex;
    cursor: pointer;
    color: #606266;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    border: 1px solid #dcdfe6;
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;

    &:not(:first-of-type) {
        margin-left: 10px;
    }

    &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
        outline: none;
    }
}

.title {
    padding: 15px;
}

.text {
    padding: 15px;

}

.bottom {
    padding: 15px;

}
</style>