if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('working',reg))
        .catch((err) => console.log('not working'))
}