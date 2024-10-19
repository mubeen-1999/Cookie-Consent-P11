
window.addEventListener('DOMContentLoaded', function () {
    
    const cookiePopup = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    const closeButton = document.getElementById('closeCookie');

   
    cookiePopup.style.display = 'block';

   
    acceptButton.addEventListener('click', function () {
        cookiePopup.style.display = 'none'; // Hide the popup
    });

   
    closeButton.addEventListener('click', function () {
        cookiePopup.style.display = 'none'; // Hide the popup
    });
});
