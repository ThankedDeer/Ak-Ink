if('ServiceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log("registro exitoso",reg))
    .catch(err => console.warn("error al tratar registrar sw", err))
}