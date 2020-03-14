function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function convertLowerCaseKeyObj(iputUpperCase) {
  var returnObj = {};
  for (var i in iputUpperCase)
    returnObj[i.toLowerCase()] = iputUpperCase[i];
  return returnObj;
}

function convertUpperCaseKeyObj(iputLowerCase) {
  var returnObj = {};
  for (var i in iputLowerCase)
    returnObj[i.toLowerCase()] = iputLowerCase[i];
  return returnObj;
}

function _hostname() {
  return location.protocol + '//' + location.hostname;
}
//anph:: get url parameter from key
function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&');

  for (var i = 0, len = sURLVariables.length; i < len; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
  return '';
}

function swalInfo(title, text, time) {
  time = !!time ? time : 5000;
  title = !!title ? '<p class="sweetalert2-title">' + title + '</p>' : 'Infomation';
  text = !!text ? '<p class="sweetalert2-text">' + text + '</p>' : '';
  swal({
    type: 'info',
    title: title,
    showCloseButton: true,
    allowOutsideClick: true,
    buttonsStyling: false,
    confirmButtonText: lang['_btn_close'],
    html: text,
    timer: time
  });
}

function swalSuccess(title, text, time, callback) {
  time = !!time ? time : 5000;
  var option = {
    type: 'success',
    showCloseButton: true,
    allowOutsideClick: true,
    buttonsStyling: false,
    confirmButtonText: lang['_btn_close'],
    timer: time
  };
  if (!!title) {
    title = { title: '<p class="sweetalert2-title">' + title + '</p>' };
    option = $.extend(option, title);
  }
  if (!!text) {
    text = { html: '<p class="sweetalert2-text">' + text + '</p>' };
    option = $.extend(option, text);
  }
  if (!!callback) {
    option['onClose'] = callback;
  }
  swal(option);
}

function swalWarning(title, text, time, callback) {
  time = !!time ? time : 5000;
  var option = {
    type: 'warning',
    showCloseButton: true,
    allowOutsideClick: true,
    confirmButtonText: lang['_btn_close'],
    timer: time,
    buttonsStyling: false
  };
  if (!!title) {
    title = { title: '<p class="sweetalert2-title">' + title + '</p>' };
    option = $.extend(option, title);
  }
  if (!!text) {
    text = { html: '<p class="sweetalert2-text">' + text + '</p>' };
    option = $.extend(option, text);
  }
  if (!!callback) {
    option['onClose'] = callback;
  }
  swal(option);
}

function swalError(title, text, time) {
  time = !!time ? time : 5000;
  var option = {
    type: 'error',
    showCloseButton: true,
    allowOutsideClick: true,
    confirmButtonText: lang['_btn_close'],
    timer: time,
    buttonsStyling: false
  };
  if (!!title) {
    title = { title: '<p class="sweetalert2-title">' + title + '</p>' };
    option = $.extend(option, title);
  }
  if (!!text) {
    text = { html: '<p class="sweetalert2-text">' + text + '</p>' };
    option = $.extend(option, text);
  }

  swal(option);
}

function swalComfirm(title, text, callback, confirm, cancel) {
  confirm = confirm || lang['_btn_close'];
  cancel = cancel || lang['_btn_cancel'];
  var option = {
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: confirm,
    cancelButtonText: cancel,
    allowOutsideClick: false,
    buttonsStyling: false,
    type: 'warning'
  };
  if (!!title) {
    title = { title: '<p class="sweetalert2-title">' + title + '</p>' };
    option = $.extend(option, title);
  }
  if (!!text) {
    text = { html: '<p class="sweetalert2-text">' + text + '</p>' };
    option = $.extend(option, text);
  }
  swal(option).then(callback);
}

function formObj2Json(formArray) { //serialize data function
  var returnArray = {};
  for (var i = 0, len = formArray.length; i < len; i++)
    returnArray[formArray[i].name] = formArray[i].value;
  return returnArray;
}


//return GMT +0 time as timestamp
function getCurrentUTC() {
  var date = new Date();
  return +new Date(+date + date.getTimezoneOffset() * 60 * 60 * 1000);
}

// Set the time we're counting down to as milisecond
function _createCountDownTimer() {
  // Update the count down every 1 second
  var x = setInterval(function () {
    var $cntDwn = $('.count-down-z'),
      $distanceElem = $('.count-down>input[type="hidden"]'),
      distance = +$distanceElem.val();
    if (distance < 0) {
      clearInterval(x);
      $('.count-down').addClass('hidden');
      return false;
    }
    // Time calculations for days, hours, minutes and seconds
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      s = Math.floor((distance % (1000 * 60)) / 1000);
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    if (h > 0)
      $cntDwn.html(h + ' : ' + m + ' : ' + s);
    else
      $cntDwn.html(m + ' : ' + s);
    $distanceElem.val(distance - 1000);
  }, 1000);
}

Number.prototype.padLeft = function (base, chr) {
  var len = (String(base || 10).length - String(this).length) + 1;
  return len > 0 ? new Array(len).join(chr || '0') + this : this;
};

//input: Date object -> dd/MM/yyyy hh:mm:ss
function get_ddMMyyyy_hhmmss(objDate) {
  var date = new Date(objDate);
  var dformat = [
    date.getDate().padLeft(),
    (date.getMonth() + 1).padLeft(),
    date.getFullYear()].join('/') +
    ' ' +
    [date.getHours().padLeft(),
    date.getMinutes().padLeft(),
    date.getSeconds().padLeft()].join(':');
  return dformat;
}

function get_hhmm(objDate) {
  var date = new Date(objDate);
  return [date.getHours().padLeft(), date.getMinutes().padLeft()].join(':');
}

//input: Date object -> dd/MM/yyyy
function get_ddMMyyyy(objDate) {
  var date = new Date(objDate);
  return [date.getDate().padLeft(), (date.getMonth() + 1).padLeft(), date.getFullYear()].join('/');
}

function getCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
}

function getCurrentDateTime(afterTime) {
  var todayCurrent = new Date();
  var dd = todayCurrent.getDate();
  var mm = todayCurrent.getMonth() + 1; //January is 0!
  var yyyy = todayCurrent.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  // tg sau + them tg hien tai
  if (!!afterTime) {
    todayCurrent.setMinutes(todayCurrent.getMinutes() + afterTime);
  }
  var h = todayCurrent.getHours();
  var m = todayCurrent.getMinutes();
  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }
  return dd + '/' + mm + '/' + yyyy + ' ' + h + ":" + m;
}

Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
};
//strip all html tag
function strip(html) {
  var tempDiv = document.createElement("DIV");
  tempDiv.innerHTML = html;
  return tempDiv.innerText;
}
//
function parseMoment($selector, format) {
  setTimeout(function () {
    $($selector).html(function () {
      var time = $(this).attr('title');
      return !!format ? moment(time, format).fromNow() : moment(time).fromNow();
    });
  }, 500);
}

function convertSecNoToHMS(time) {//s in number
  var h = ~~(time / 3600), m = ~~((time % 3600) / 60), s = time - h * 3600 - m * 60;
  return {
    h: h.padLeft(),
    m: m.padLeft(),
    s: s.padLeft()
  };
}

function autosize(textarea) {
  !!textarea && textarea.addEventListener("keydown", function () {
    var el = this;
    setTimeout(function () {
      el.style.cssText = "height:auto; padding:0";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  });
}

// Convert time to 2018-12-25T12:55:00.000Z from 25/12/2018 12:20
function getISOSDateString(date) {
  var day = date.substr(0, 2);
  var moth = date.substr(3, 2);
  var year = date.substr(6, 4);
  var time = date.substr(date.indexOf(' '), date.length);
  date = moth + '-' + day + '-' + year + ' ' + time;
  date = new Date(new Date(date) - (new Date()).getTimezoneOffset() * 60000).toISOString();
  return date;
}

function limitStr(str, length) {
  if (!!length) {
    return (str.length > length) ? str.substring(0, length - 2) + "..." : str;
  } else {
    return (str.length > 17) ? str.substring(0, 17) + "..." : str;
  }
}

function changeTitleComb(idComb, str) {
  $(idComb).text(limitStr(str));
}

// Get file size to GB - MB - KB
function getSizeFile(fileSize) {
  if (!!fileSize && typeof fileSize === 'number') {
    var iSize = (fileSize / 1024);
    if (iSize / 1024 > 1) {
      if (((iSize / 1024) / 1024) > 1) {
        iSize = (Math.round(((iSize / 1024) / 1024) * 100) / 100) + "Gb";
      } else {
        iSize = (Math.round((iSize / 1024) * 100) / 100) + "Mb";
      }
    } else {
      iSize = (Math.round(iSize * 100) / 100) + "Kb";
    }
    return iSize;
  }
}

function FormatCurrency(ctrl) {
  if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
    return;
  }
  var val = ctrl.value;
  val = val.replace(/,/g, "");
  ctrl.value = "";
  val += '';
  var x = val.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  ctrl.value = x1 + x2;
}

function CheckNumeric() {
  return event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode === 46;
}

function formatLable(value) {
  var val = value.replace(/,/g, "");
  val += '';
  var x = val.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

function showLoading() {
  $('.faci-loading').addClass('open');
  $('.lg-login').addClass('invisible');
  $('.img-loading').removeClass('d-none');
}

function hideLoading() {
  $('.faci-loading').removeClass('open');
  $('.lg-login').removeClass('invisible');
  $('.img-loading').addClass('d-none');
}

// Chuyển chuỗi kí tự (string) sang đối tượng Date()
function parseDate(str) {
  var mdy = str.split('/');
  return new Date(mdy[2], mdy[1], mdy[0]);
}

function getTimeCur() {
  return new Date().getTime();
}

$('input[name="daterange"]').daterangepicker({
  "locale": {
    "format": "DD/MM/YYYY", "separator": " - ", "applyLabel": "Áp dụng", "cancelLabel": "Hủy", "fromLabel": "Từ", "toLabel": "Đến", "customRangeLabel": "Custom",
    "daysOfWeek": ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    "monthNames": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
  }
});
$('input[name="daterangereport"]').daterangepicker({
  "timePicker": true, "timePickerIncrement": 1, "timePicker24Hour": true,
  "locale": {
    "format": "DD/MM/YYYY hh:mm", "separator": " - ", "applyLabel": "Áp dụng", "cancelLabel": "Hủy", "fromLabel": "Từ", "toLabel": "Đến", "customRangeLabel": "Custom",
    "daysOfWeek": ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    "monthNames": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
  }
});
$('input[name="daterangesinger"]').daterangepicker({
  "singleDatePicker": true,
  "showDropdowns": true,
  "locale": {
    "format": "DD/MM/YYYY", "separator": " - ", "applyLabel": "Áp dụng", "cancelLabel": "Hủy", "fromLabel": "Từ", "toLabel": "Đến", "customRangeLabel": "Custom",
    "daysOfWeek": ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    "monthNames": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
  }
});
function formatTime(val) {
  if (val !== null) {
    var value = new Date(new Date(val) - (new Date()).getTimezoneOffset() * 60000).toISOString();
    var date = value.substr(0, 10).split("-");
    var time = value.substr(11, 5);
    return date[2] + "/" + date[1] + "/" + date[0];
  }
}
function convertDate(val) {
  if (val !== null) {
    var value = new Date(new Date(val) - (new Date()).getTimezoneOffset() * 60000).toISOString();
    var date = value.substr(0, 10).split("-");
    return date[2] + "/" + date[1] + "/" + date[0];
  }
  return convertDate((new Date()).toISOString());
}
function change_alias(alias) {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/gi, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/gi, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, "y");
  str = str.replace(/đ/gi, "d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/gi, " ");
  str = str.replace(/ + /gi, " ");
  str = str.trim();
  return str;
}
function _removeUnicode(str) {
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|Ä|ä)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ö|ö)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, "d");
  str = str.replace(/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/g, 'A');
  str = str.replace(/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/g, 'E');
  str = str.replace(/(Ì|Í|Ị|Ỉ|Ĩ)/g, 'I');
  str = str.replace(/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/g, 'O');
  str = str.replace(/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ü|ü)/g, 'U');
  str = str.replace(/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/g, 'Y');
  str = str.replace(/(Đ)/g, 'D');
  return str;
}

function search(val, obj) { // narrow used in n100/n850
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    var keys = Object.keys(obj);
    for (var i in keys) {
      var key = typeof val === 'boolean' ? (keys[i][1].toLowerCase() === 'n' ? !!+obj[keys[i]] : !!obj[keys[i]]) : obj[keys[i]]
      if (key === val)
        return keys[i];
    }
  } else
    return;
}

function timezone() {
  var array = ["(GMT-12:00) International Date Line West",
    "(GMT-11:00) Midway Island, Samoa",
    "(GMT-10:00) Hawaii",
    "(GMT-09:00) Alaska",
    "(GMT-08:00) Tijuana, Baja California",
    "(GMT-08:00) Pacific Time (US & Canada)",
    "(GMT-07:00) Mountain Time (US & Canada)",
    "(GMT-07:00) Chihuahua, La Paz, Mazatlan - Old",
    "(GMT-07:00) Chihuahua, La Paz, Mazatlan - New",
    "(GMT-07:00) Arizona",
    "(GMT-06:00) Saskatchewan",
    "(GMT-06:00) Guadalajara, Mexico City, Monterrey - Old",
    "(GMT-06:00) Guadalajara, Mexico City, Monterrey - New",
    "(GMT-06:00) Central Time (US & Canada)",
    "(GMT-06:00) Central America",
    "(GMT-05:00) Indiana (East)",
    "(GMT-05:00) Eastern Time (US & Canada)",
    "(GMT-05:00) Bogota, Lima, Quito, Rio Branco",
    "(GMT-04:30) Caracas", "(GMT-04:00) Santiago",
    "(GMT-04:00) Manaus",
    "(GMT-04:00) La Paz",
    "(GMT-04:00) Atlantic Time (Canada)",
    "(GMT-03:30) Newfoundland",
    "(GMT-03:00) Montevideo",
    "(GMT-03:00) Greenland",
    "(GMT-03:00) Georgetown",
    "(GMT-03:00) Buenos Aires",
    "(GMT-03:00) Brasilia",
    "(GMT-02:00) Mid-Atlantic",
    "(GMT-01:00) Cape Verde Is.",
    "(GMT-01:00) Azores",
    "(GMT) Casablanca",
    "(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
    "(GMT) Monrovia, Reykjavik",
    "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris",
    "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    "(GMT+01:00) West Central Africa",
    "(GMT+02:00) Amman",
    "(GMT+02:00) Athens, Bucharest, Istanbul",
    "(GMT+02:00) Beirut",
    "(GMT+02:00) Cairo",
    "(GMT+02:00) Harare, Pretoria",
    "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    "(GMT+02:00) Jerusalem",
    "(GMT+02:00) Minsk",
    "(GMT+02:00) Windhoek",
    "(GMT+03:00) Baghdad",
    "(GMT+03:00) Kuwait, Riyadh",
    "(GMT+03:00) Moscow, St. Petersburg, Volgograd",
    "(GMT+03:00) Nairobi",
    "(GMT+03:00) Tbilisi",
    "(GMT+03:30) Tehran",
    "(GMT+04:00) Abu Dhabi, Muscat",
    "(GMT+04:00) Baku",
    "(GMT+04:00) Caucasus Standard Time",
    "(GMT+04:00) Port Louis",
    "(GMT+04:00) Yerevan",
    "(GMT+04:30) Kabul",
    "(GMT+05:00) Ekaterinburg",
    "(GMT+05:00) Islamabad, Karachi",
    "(GMT+05:00) Tashkent",
    "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    "(GMT+05:30) Sri Jayawardenepura",
    "(GMT+05:45) Kathmandu",
    "(GMT+06:00) Almaty, Novosibirsk",
    "(GMT+06:00) Astana, Dhaka",
    "(GMT+06:30) Yangon (Rangoon)",
    "(GMT+07:00) Bangkok, Hanoi, Jakarta",
    "(GMT+07:00) Krasnoyarsk",
    "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    "(GMT+08:00) Irkutsk, Ulaan Bataar",
    "(GMT+08:00) Kuala Lumpur, Singapore",
    "(GMT+08:00) Perth", "(GMT+08:00) Taipei",
    "(GMT+09:00) Osaka, Sapporo, Tokyo",
    "(GMT+09:00) Seoul", "(GMT+09:00) Yakutsk",
    "(GMT+09:30) Adelaide",
    "(GMT+09:30) Darwin",
    "(GMT+10:00) Brisbane",
    "(GMT+10:00) Canberra, Melbourne, Sydney",
    "(GMT+10:00) Guam, Port Moresby",
    "(GMT+10:00) Hobart", "(GMT+10:00) Vladivostok",
    "(GMT+11:00) Magadan, Solomon Is., New Caledonia",
    "(GMT+12:00) Auckland, Wellington",
    "(GMT+12:00) Fiji, Kamchatka, Marshall Is.",
    "(GMT+13:00) Nuku'alofa"]
  return array;
}

function timezoneCompact() {
  var array = [];
  for (i = 0, lenght = timezone().length; i < length; i++) {
    var time = timezone()[i].split(" ");
    array.push(time[0]);
  }
  return array;
}

// check file type when set MN654 upload file
function checkFileType(ext, arrExt) {
  if ($.inArray(ext, arrExt) === -1)
    return false;
  return true;
}

function getMN654($typeFile) {
  var MN654 = null;
  if (checkFileType($typeFile, ['jpg', 'jpeg', 'png'])) {
    MN654 = 2;
  } else if (checkFileType($typeFile, ['doc', 'docx', 'xls', 'xlsx', 'txt', 'pdf', 'rar', 'zip'])) {
    MN654 = 1;
  } else if (checkFileType($typeFile, ['m4v', 'avi', 'mpg', 'mp4'])) {
    MN654 = 3;
  }
  return MN654;
}

function checkFileSize(fileSize) {
  if (fileSize > 1024 * 1024 * 2) {
    return false;
  }
  return true;
}


function buildUrl(url, paramObj) {
  if (url.substr(url.length - 1) === '/')
    url = url.slice(0, -1)

  return url +
    (url.indexOf('?') > -1 ? '&' : '?')
    + Object.keys(paramObj).reduce(function (paramString, paramKey) {
      return paramString + '&' + paramKey + '=' + paramObj[paramKey];
    });

}


function getRandomStr(len) {
  len = len || 8;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''),
    size = chars.length
  let str = ""
  for (let i = 0; i < len; i++) {//for get size
    let lastNumber = Math.floor(Math.random() * size)
    str += chars[lastNumber]
  }
  return str
}