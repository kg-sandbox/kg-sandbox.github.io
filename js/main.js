function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function databaseCookie(name, duration) {
  var cookieName = name;
  var cookieValue = getCookie(cookieName);

  if (cookieValue == undefined) {
    var hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    document.cookie = cookieName + "=" + hash + "; Max-Age=" + duration + "; path=/; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
    console.log('New cookie ' + hash);
  } else {
    document.cookie = cookieName + "=" + cookieValue + "; Max-Age=" + duration + "; path=/; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
    console.log('Existing cookie ' + hash);
  }
}

databaseCookie("KG_Sandbox_ID", 2592000);
