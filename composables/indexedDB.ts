let connection: any

function clientOnly(excutor: any) {
    if (!window) return () => {
        return Promise.reject('not run when server side')
    }
    return excutor
}

export const getIndexedDBConnection = clientOnly(() => {
    return new Promise((resolve, reject) => {
        if (connection) resolve(connection)

        const db = window.indexedDB.open('liutao', 2)
        db.onupgradeneeded = e => {
            console.log('onupgradeneeded', e);
            connection = e.target?.result

            connection.createObjectStore('user', {
                keyPath: 'id'
            })
        }

        db.onsuccess = e => {
            console.log('onsuccess', e);
            connection = connection || e.target?.result
            resolve(connection)
        }

        db.onerror = e => {
            console.log('onerror', e);
        }

        
    }).catch(err => {
        console.log('getIndexedDBConnection error:', err);
    })
})


