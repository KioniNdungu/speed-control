document.addEventListener('DOMContentLoaded', function() {
  var setSpeedButton = document.getElementById('setSpeed');
  var speedInput = document.getElementById('speedInput');

  setSpeedButton.addEventListener('click', function() {
    var speed = parseFloat(speedInput.value);
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'setSpeed', speed: speed });
    });
  });
});
