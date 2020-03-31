function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function deleteSubmitCookie(name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/scenario2;domain=" + location.hostname.replace(/^www\./i, "");
}

function submitCookie() {
  document.cookie = "KG_Submission_Status=true;path=/scenario2;domain=" + location.hostname.replace(/^www\./i, "");
}

function displayConfirm() {
  if (getCookie('KG_Submission_Status') == 'true') {
    var submitConfirm = document.getElementById('submit-confirm');
    submitConfirm.style.display = "block";
    deleteSubmitCookie('KG_Submission_Status');
  };
}
