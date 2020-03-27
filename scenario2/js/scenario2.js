function meterSet(name,duration) {
  var meter = getCookie(name);
  if (meter == undefined) {
    var cookieValue = 1;
    document.cookie = cookieName + "=" + cookieValue + "; Max-Age=" + duration + "; path=/; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax"; // Sets cookie for all subdomains
  } else {
    var cookieValue = Number(meter) + 1;
    document.cookie = cookieName + "=" + cookieValue + "; Max-Age=" + duration + "; path=/; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax"; // Sets cookie for all subdomains
  }
}
