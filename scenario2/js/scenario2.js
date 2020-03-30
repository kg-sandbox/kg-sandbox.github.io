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
  } else {
    var cookieValue = Number(cookieValue) + 1;
    document.cookie = name + "=" + cookieValue + "; Max-Age=" + duration + "; path=/scenario2; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
  }
}

function modal() {
  var modal = document.getElementById("paywall");
  var resetLink = document.getElementById("reset-meter");
  var readCount = Number(getCookie("KG_Meter_Count"));
  if (readCount > 3) {
    modal.style.display = "block";
  }
  resetLink.onclick = function() {
    modal.style.display = "none";
  }
}

function subType(form) {
  var subType = document.getElementsByName(form);
  for (i=0; i < subType.length; i++) {
    if (subType[i].checked) {
      return subType[i].value;
      break;
    }
  }
}


function displayAddress() {
  var subValue = subType('subscription');
  var address = document.getElementById('form-section-address');

  if (subValue == 'print_dig') {
    address.style.display = "block";
    document.getElementById('address1').required=true;
    document.getElementById('city').required=true;
    document.getElementById('state').required=true;
    document.getElementById('zip').required=true;
  } else {
    address.style.display = "none";
    document.getElementById('address1').required=false;
    document.getElementById('city').required=false;
    document.getElementById('state').required=false;
    document.getElementById('zip').required=false;
  }
}

function setSubPrice() {
  var subValue = subType('subscription');
  var cost = document.getElementById('type');
  var cost = document.getElementById('cost');
  var finalCost = document.getElementById('final-cost');
  var finalCostTotal = document.getElementById('final-cost-total');
  var finalCostMonthly = document.getElementById('final-cost-monthly');

  var print_dig_cost = '149';
  var dig_only_cost = '114';

  if (subValue == 'print_dig') {
    cost.value = print_dig_cost;
    finalCostTotal.innerHTML = print_dig_cost;
    finalCostMonthly.innerHTML = (Number(print_dig_cost)/12).toFixed(2).toString();
    finalCost.style.display = "block";
  } else {
    cost.value = dig_only_cost;
    finalCostTotal.innerHTML = dig_only_cost;
    finalCostMonthly.innerHTML = (Number(dig_only_cost)/12).toFixed(2).toString();
    finalCost.style.display = "block";
  }
}

function submitCookie(){
  document.cookie = "KG_Subscription_Type=" + subType('subscription') + ";path=/scenario2; domain=." + location.hostname.replace(/^www\./i, "") + ";secure;samesite=lax";
}

function setRibbon(){
  var unsubRibbon = getElementById('unsub-ribbon');
  var subRibbon = getElementById('sub-ribbon');
  if (getCookie('KG_Subscription_Type') != undefined) {
    subRibbon.style.display = "block";
  } else {
    unsubRibbon.style.display = "block";
  }
}
