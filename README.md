# Video Speed Up Chrome Extension

### How To Download The Repo
```
git clone https://github.com/KioniNdungu/speed-control
```
or download the zip directly.

### How To Load This Extension In Google Chrome:
```
Navigate to chrome://extensions/
Enable Developer Mode at the top right
Click "Load unpacked"
Load the cloned repo
```

### Examples Of Playback Speeds:
```
0.5 = half speed
1 = normal speed
10 = 10 times speed
```

### Sites Confirmed Working:
- 
- 

### Sites Confirmed *NOT* Working:
-
- 
---

### How it Works:
`inject.js` is the entirety of the script
```js
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

```

It also functions as a bookmarklet if you don't want to install the full extension. Simply create a bookmark with the url as the code snippet above.

---

### Future:
- test on more websites and collect a list of where it currently works
- expand script to work on websites that it currently doesn't work on
