function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function databaseCookie(name, duration) {
  var cookieValue = getCookie(name);
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

function kgl(i,e,p) {
  databaseCookie('_kglid');
  let scriptId = 'AKfycbznKH4DhQyRy4Uv1Dmcj6N9LkJokfdDQcHqmIIiaNyu4wQDTwTV';
  let baseUrl = 'https://script.google.com/macros/s/' + scriptId + '/exec?';
  let logId = 'LogId=' + i;
  let userId = 'UserId=' + getCookie('_kglid');
  //let userId = 'UserId=' + 'uid';
  let hostname = 'Domain=' + window.location.hostname;
  //let hostname = 'Domain=' + 'hname';
  let path = 'Path=' + window.location.pathname;
  //let path = 'Path=' + 'pname';
  let referrer = 'Referrer=' + document.referrer;
  //let referrer = 'Referrer=' + 'rfer';
  let action = 'Action=' + e;
  var values = [logId,userId,hostname,path,referrer,action,serialize(p)];
  var fullUrl = baseUrl + values.filter(Boolean).join('&');
  fetch(fullUrl)
}

function dev_kgl(i,e,p) {
  databaseCookie('_kglid');
  let scriptId = 'AKfycbznKH4DhQyRy4Uv1Dmcj6N9LkJokfdDQcHqmIIiaNyu4wQDTwTV';
  let baseUrl = 'https://script.google.com/macros/s/' + scriptId + '/exec?';
  let logId = 'LogId=' + i;
  let userId = 'UserId=' + getCookie('_kglid');
  //let userId = 'UserId=' + 'uid';
  let hostname = 'Domain=' + window.location.hostname;
  //let hostname = 'Domain=' + 'hname';
  let path = 'Path=' + window.location.pathname;
  //let path = 'Path=' + 'pname';
  let referrer = 'Referrer=' + document.referrer;
  //let referrer = 'Referrer=' + 'rfer';
  let action = 'Action=' + e;
  var values = [logId,userId,hostname,path,referrer,action,serialize(p)];
  var fullUrl = baseUrl + values.filter(Boolean).join('&');
  fetch(fullUrl)
}

/*
kgLog('123','PageView1',{
  key1: "value1",
  key2: "value2"
})

kgLog('123','PageView2')
*/
