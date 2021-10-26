setInterval(function () {
  var xhrButtonSuccess = async function () {
    while (!document.querySelector('.xhr.success')) {
      await new Promise(function (r) { setTimeout(r, 500);
      });
    }
  }();

  xhrButtonSuccess.addEventListener('click', function () {
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg');
  });
}(), 100);

function handleEvent(e) {
  log.textContent = log.textContent + "".concat(e.type, ": ").concat(e.loaded, " bytes transferred\n");
}

function addListeners(xhr) {
  xhr.addEventListener('loadstart', handleEvent);
  xhr.addEventListener('load', handleEvent);
  xhr.addEventListener('loadend', handleEvent);
  xhr.addEventListener('progress', handleEvent);
  xhr.addEventListener('error', handleEvent);
  xhr.addEventListener('abort', handleEvent);
}

function runXHR(url) {
  log.textContent = '';
  var xhr = new XMLHttpRequest();
  addListeners(xhr);
  xhr.open("GET", url);
  xhr.send();
  return xhr;
}