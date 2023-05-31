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


  
  const searchEngineForProxy = localStorage.getItem("selectedSearchEngine");

if (!isUrl(url)) {
  url = searchEngineForProxy + url;
} else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
  url = 'http://' + url;
}
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
