function getEventsCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function eventsDatabaseCookie(name, duration) {
  var cookieValue = getEventsCookie(name);
  if (cookieValue == undefined) {
    var hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    document.cookie = name + "=" + hash + "; Max-Age=" + duration + "; path=/; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
  } else {
    document.cookie = name + "=" + cookieValue + "; Max-Age=" + duration + "; path=/; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
  }
}

function serialize(obj) {
  var qps = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      qps.push('[cd]' + encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return qps.join("&");
}

function kgl(e,p) {
  eventsDatabaseCookie('_kglid');
  let scriptId = 'AKfycbznKH4DhQyRy4Uv1Dmcj6N9LkJokfdDQcHqmIIiaNyu4wQDTwTV';
  let baseUrl = 'https://script.google.com/macros/s/' + scriptId + '/exec?';
  let userId = 'UserId=' + getEventsCookie('KG_Sandbox_ID');
  let hostname = 'Domain=' + window.location.hostname;
  let path = 'Path=' + window.location.pathname;
  let referrer = 'Referrer=' + document.referrer;
  let action = 'Action=' + e;
  var values = [userId,hostname,path,referrer,action,serialize(p)];
  var fullUrl = baseUrl + values.filter(Boolean).join('&');
  fetch(fullUrl)
}
