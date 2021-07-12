
(async function(){
    if ('serviceWorker' in navigator) {
        try {
            const reg = await navigator.serviceWorker.register('/serviceWorker.js')
        } catch (e) {
            console.log('Service worker register fail')
        }
    }
})()