import { defineStore } from 'pinia'

export const useIndexedDBStore = defineStore('indexedDB', {
    state: () => ({
        connection: null,
    }),
    actions: {
        getConnection() {
            return this.connection
        }
    }
})