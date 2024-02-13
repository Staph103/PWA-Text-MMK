const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    
event.preventDefault();

deferredPrompt = event;
showInstallButton();

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Check if the install prompt event is available
    if (deferredPrompt) {
      // Show the install prompt to the user
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const results = await deferredPrompt.userChoice;
      // Check the user's choice
      if (results.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = '';
      // Hide the install button or any other UI element used for installation
      hideInstallButton();
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // The app has been successfully installed
    console.log('App installed successfully');
  });
  
  // Function to show the install button or any other UI element used for installation
  function showInstallButton() {
    // Show the install button or any other UI element
    butInstall.style.display = 'block';
  }
  
  // Function to hide the install button or any other UI element used for installation
  function hideInstallButton() {
    // Hide the install button or any other UI element
    butInstall.style.display = 'none';
  }