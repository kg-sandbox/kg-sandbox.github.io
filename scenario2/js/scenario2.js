function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function resetMeter(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=" + location.hostname.replace(/^www\./i, "") + ";path=/scenario2";
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

function modal() {
  var modal = document.getElementById("paywall");
  var resetLink = document.getElementById("reset-meter");
  var readCount = Number(getCookie("KG_Meter_Count"));
  if (readCount >= 3) {
    modal.style.display = "block";
  }
  resetLink.onclick = function() {
    modal.style.display = "none";
  }
}
