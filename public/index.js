"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  function detectInputType() {
    var inputString = document.querySelector('#uv-address').value;
    var searchEngine = localStorage.getItem("selectedSearchEngine") || 'https://www.google.com/search?q';
  
    // Regular expression pattern to match URLs
    var urlPattern = /^(?:\w+:)?\/\/(?:[^\s./?#]+\.)?[^\s./?#]+\.[^\s]*$/;
  
    // Check if the input matches the URL pattern
    if (urlPattern.test(inputString)) {
      var url = search(address.value, searchEnginelocalstorage);
    } else {
      var url = search(searchEnginelocalstorage + address.value);
    }
  
    return url;
  }
  
  // Example usage
  var url = detectInputType();
  console.log(url);
  
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
