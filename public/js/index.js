
if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('../sw.js', { scope: './' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.warn("Service Worker Failed to Register", err);
    })

}
