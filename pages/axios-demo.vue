<template>
    <main>

        <el-button @click="sendRequest">Default</el-button>

    </main>
</template>
<script setup>
import axios from 'axios'

const sendRequest = async () => {
    axios.post('/api/', {
    }).then(data => {
        console.log('服务器响应', data);
    }).catch(err => {
        console.log('catch axios 抛出的错误', err);
    })
}

</script>
<style scoped lang="less"></style>