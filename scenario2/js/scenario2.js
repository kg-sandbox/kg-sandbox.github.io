function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function meterSet(name,duration) {
  var meter = getCookie(name);
  if (meter == undefined) {
    var cookieValue = 1;
    document.cookie = cookieName + "=" + cookieValue + "; Max-Age=" + duration + "; path=/scenario2; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
  } else {
    var cookieValue = Number(meter) + 1;
    document.cookie = cookieName + "=" + cookieValue + "; Max-Age=" + duration + "; path=/scenario2; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
  }
}
