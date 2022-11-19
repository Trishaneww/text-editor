const butInstall = document.getElementById('buttonInstall');

// Created and added event handler for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
       // Stored the triggered events
       window.deferredPrompt = event;

       // Removed the hidden class from the button.
       butInstall.classList.toggle('hidden', false); 
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  console.log("hello there")
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// created event handler for appinstalled
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
