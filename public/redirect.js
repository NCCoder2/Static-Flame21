const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("redirect") === "false") {
  // If the redirect parameter is present and set to "false", do nothing
} else if (urlParams.get("redirect") === "true") {
  // If the redirect parameter is present and set to "true", redirect the user to main.html
  window.location.href = "main.html";
} else {
  // If the redirect parameter is not present, check if the referrer is the main.html page
  const referrerUrl = document.referrer;
  if (referrerUrl.endsWith("main.html")) {
    // If the referrer is the main.html page, do nothing
  } else if (window.location.pathname.endsWith("main.html")) {
    // If the current page is already main.html, do nothing
  } else {
    // If the referrer is not the main.html page, add the redirect parameter and redirect to main.html
    const newUrl = window.location.href + "?redirect=true";
    window.location.replace(newUrl);
  }
}
