function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=" + location.hostname.replace(/^www\./i, "");
}

function databaseCookie(name, duration) {
  var cookieValue = getCookie(name);
  if (cookieValue == undefined) {
    var hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    document.cookie = name + "=" + hash + "; Max-Age=" + duration + "; path=/; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
    console.log('New ' + name + ' cookie was set with the value ' + hash);
  } else {
    document.cookie = name + "=" + cookieValue + "; Max-Age=" + duration + "; path=/; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
    console.log('Existing ' + name + ' cookie with the value ' + cookieValue + ' was extended for another 30 days')
  }
}

databaseCookie("KG_Sandbox_ID", 2592000);

function orderId() {
  return Math.round((Math.random()*10000000000));
}
