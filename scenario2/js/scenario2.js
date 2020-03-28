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
  var content = '<div class="p-2 w-100 text-center"><div class="modal-content"><!--<span class="close">&times;</span>--><h2>Look\'s like you\'re loving our content...</h2><h3>You\'ve read all three of your free articles this week...</h3><br><h3>But......</h3><br><h3>You can unlock all of our content for just $7.99/week!</h3><br><h4><a href="">Click here to subscribe now!</a></h4><br><br><div id="reset-meter"><i><a onclick="resetMeter('KG_Meter_Count')" href="javascript:location.reload();">Click here to reset your meter for more testing.</a></i></div></div></div>';
  document.getElementById("paywall").innerHTML = content;

  // Get the modal
  var modal = document.getElementById("paywall");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var resetLink = document.getElementById("reset-meter");
  //var readCount = 3;
  var readCount = Number(getCookie("KG_Meter_Count"));
  if (readCount >= 3) {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
  resetLink.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  /*
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  */
}
