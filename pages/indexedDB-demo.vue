<template>
    <main>
        indexedDB
    </main>
</template>
<script setup>
let connection

const addData = connection => {
    const tx = connection.transaction('user', 'readwrite')
    const store = tx.objectStore('user')
    const addReq = store.add({
        id: '3',
        name: 'Mark Liu'
    })
    addReq.onsuccess = () => {
        console.log('add success');
    }
}

onMounted(async () => {
    connection = await getIndexedDBConnection()
    addData(connection)
})

</script>
<style scoped lang="less"></style>