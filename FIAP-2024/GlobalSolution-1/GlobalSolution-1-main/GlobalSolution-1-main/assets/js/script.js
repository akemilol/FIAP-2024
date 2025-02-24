function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
    menuMobile.classList.add('open')
    }
} 


// Watson  IA
window.watsonAssistantChatOptions = {
    integrationID: "b40765a5-0abf-407e-9647-6abd2a9ab7f0", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "54a2eb5c-32a6-463f-ac25-6e8089ca06e2", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});



document.addEventListener('DOMContentLoaded', function() {
    const buttonContato = document.querySelector('.button-contato');
    buttonContato.addEventListener('click', function() {
        window.location.href = 'form.html';
    });
});
