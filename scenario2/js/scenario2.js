function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function meterSet(name,duration,max) {
  var cookieValue = getCookie(name);
  if (cookieValue == undefined) {
    var cookieValue = 1;
    document.cookie = name + "=" + cookieValue + "; Max-Age=" + duration + "; path=/scenario2; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
  } else if (Number(cookieValue) < max){
    var cookieValue = Number(cookieValue) + 1;
    document.cookie = name + "=" + cookieValue + "; Max-Age=" + duration + "; path=/scenario2; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
  }
}
