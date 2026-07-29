// OAuth and Authentication Logic

// Check if URL matches OAuth/authentication patterns
function matchesAuthUrl(url, baseUrl = window.location.href) {
  try {
    const urlObj = new URL(url, baseUrl);
    const hostname = urlObj.hostname.toLowerCase();
    const pathname = urlObj.pathname.toLowerCase();
    const fullUrl = urlObj.href.toLowerCase();

    // OAuth/authentication URL patterns — kept specific to avoid false positives
    const oauthPatterns = [
      /accounts\.google\.com/,
      /accounts\.google\.[a-z]+/,
      /login\.microsoftonline\.com/,
      /github\.com\/login/,
      /facebook\.com\/.*\/dialog/,
      /twitter\.com\/oauth/,
      /appleid\.apple\.com/,
      /\/oauth\//,
      /\/auth\//,
      /\/authorize/,
      /\/login\/oauth/,
      /servicelogin/,
      /\/o\/oauth2/,
    ];

    const isMatch = oauthPatterns.some(
      (pattern) =>
        pattern.test(hostname) ||
        pattern.test(pathname) ||
        pattern.test(fullUrl),
    );

    if (isMatch) {
      console.log("[RedWX] OAuth URL detected:", url);
    }

    return isMatch;
  } catch (e) {
    return false;
  }
}

// Check if URL is an OAuth/authentication link
function isAuthLink(url) {
  return matchesAuthUrl(url);
}

// Check if this is an OAuth/authentication popup
function isAuthPopup(url, name) {
  // Known authentication window names — keep provider-specific only
  const authWindowNames = [
    "AppleAuthentication",
    "google-auth",
    "auth-popup",
  ];

  if (authWindowNames.includes(name)) {
    return true;
  }

  return matchesAuthUrl(url);
}

// Export functions to global scope
window.matchesAuthUrl = matchesAuthUrl;
window.isAuthLink = isAuthLink;
window.isAuthPopup = isAuthPopup;
