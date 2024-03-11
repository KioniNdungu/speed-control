chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'setSpeed') {
    var videos = document.querySelectorAll("video");
    var speed = request.speed;

    videos.forEach(function(video) {
      video.playbackRate = speed;
    });

    chrome.storage.sync.set({ 'customPlaybackSpeed': speed });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get('customPlaybackSpeed', function(result) {
    var storedSpeed = result.customPlaybackSpeed;
    var videos = document.querySelectorAll("video");

    if (storedSpeed) {
      videos.forEach(function(video) {
        video.playbackRate = storedSpeed;
      });
    }
  });
});
