const { ipcRenderer } = require('electron');
const Swal = require('sweetalert2');

document.addEventListener('DOMContentLoaded', () => {
  let disable = document.getElementById('disable');
  disable.addEventListener('click', (event) => {
    Swal.fire({
      title: 'Alert',
      text: 'message',
      icon: 'info',
      confirmButtonText: 'OK'
    });

    ipcRenderer.send('disableMouseEvents');
    event.sender.send('showAlert', 'Mouse Events Disabled on Current Window');

  });

  let forward = document.getElementById('forward');
  forward.addEventListener('mouseenter', () => {
    console.log('Mouse Entered the Region...Disabling Click');
    ipcRenderer.send('enableForwardMouseEvents');
  });

  forward.addEventListener('mouseleave', () => {
    console.log('Mouse Left the Region...Event Emitted');
    ipcRenderer.send('disableForwardMouseEvents');
  });
});


