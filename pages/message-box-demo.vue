<template>
    <main>
        <el-button @click="onClick">open MessageBox</el-button>
    </main>
</template>
<script setup>
import { getCurrentInstance } from 'vue'

const { appContext: { config: { globalProperties } } } = getCurrentInstance()
// console.log('globalProperties', globalProperties);

const onClick = () => {
    globalProperties.$message(
        '标题',
        'steam太好玩了',
        {
            btns: [
                {
                    text: '确定',
                    onclick() {
                        alert('确定')
                    }
                },
                {
                    text: '取消',
                    onclick() {
                        alert('取消')
                    }
                },
            ],
        }
    )
}

onMounted(() => {
    // globalProperties.$message()
})


</script>
<style scoped lang="less"></style>