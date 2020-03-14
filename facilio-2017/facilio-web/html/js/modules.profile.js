/*
 * Author: Toailq
 * Create: 08/03/2018
 */
var device = '';
var type = '';
var timez, language;
var pri1 = 0;
var pri2 = 0;
var pri3 = 0;
var stt1 = 0;
var stt2 = 0;
var stt3 = 0;

var data = new Object();
var profile = {
    data: Object(),
    editProfile: function (data, pri1, pri2, pri3, stt1, stt2, stt3,
            mail, mobile, fonet, fax, timezone, language, device, type) {
        var item = {
            pnFC4501: pri1, pnFC4502: pri2, pnFC4503: pri3, pnFC5001: stt1, pnFC5002: stt2, pnFC5003: stt3,
            pvFC550: type, pvQV102: data.QV102, pdQD103: data.QD103, pdQD104: data.QD104, pvQV105: mail,
            pvQV106: mobile, pvQV107: fonet, pvQV108: fax, pvQV109: device, pnQN110: data.QN110,
            pnQN111: data.QN111, pnQN112: data.QN112, pnQN113: data.QN113, pvQV114: timezone, pvQV115: language
        }
        this.data = item;
    }
}

openDialog('.user', '#dl_change_profile');
openDialog('.line-password', '#dl_change_password');
$('#btn_save_profile').click(saveProfile);
$('#btn-save-password').click(checkPassword);
$('.user').click(initData);


$(document).ready(function () {
    loadSelectTimezone();
});

function initData() {
    showLoading();
    resetForm();
    $.ajax({
        type: "GET",
        url: "/profile/select_rowoftable_p5_str",
        dataType: "json",
        success: function (res) {
            console.log(res);
            console.log(res.data[0]);
            if (res.status === 'success') {
                data = res.data[0];
                language = data.QV115;
                if (data.QV115 == 'vi') {
                    $("#textLanguage").text('Tiếng việt')
                } else if (data.QV115 === 'en') {
                    $("#textLanguage").text('English')
                } else if (data.QV115 === 'de') {
                    $("#textLanguage").text('Dustch')
                }
                timez = data.QV114;
                for (i = 0, lenght = timezone().length; i < length; i++) {
                    var time = timezone()[i].substring(1, 10);
                    if (time.indexOf(')') > -1) {
                        time = time.substring(0, 3);
                    }
                    if (data.QV114 === time) {
                        $("#textTimeZone").text(timezone()[i])
                    }
                }
                if (data.FC4501 == 1) {
                    $("#priority_hight").prop('checked', true);
                }
                if (data.FC4502 == 2) {
                    $("#priority_medium").prop('checked', true);
                }
                if (data.FC4503 == 3) {
                    $("#priority_low").prop('checked', true);
                }
                if (data.FC5001 == 1) {
                    $("#status_opening").prop('checked', true);
                }
                if (data.FC5002 == 2) {
                    $("#status_doing").prop('checked', true);
                }
                if (data.FC5003 == 10) {
                    $("#status_finish").prop('checked', true);
                }
                if (data.QV109) {
                    var arr = data.QV109.split(',');
                    for (i = 0; i < arr.length; i++) {
                        console.log(arr[i]);
                        if (arr[i].trim() === 'M') {
                            $("#device_mail").prop('checked', true);
                        }
                        if (arr[i].trim() === 'S') {
                            $("#device_sms").prop('checked', true);
                        }
                        if (arr[i].trim() === 'P') {
                            $("#device_phone").prop('checked', true);
                        }
                    }
                }
                if (data.FC550) {
                    var arr = data.FC550.split(',');
                    for (i = 0; i < arr.length; i++) {
                        console.log(arr[i]);
                        if (arr[i].trim() === 'E') {
                            $("#species_mechanical").prop('checked', true);
                        }
                        if (arr[i].trim() === 'M') {
                            $("#species_electric").prop('checked', true);
                        }
                        if (arr[i].trim() === 'I') {
                            $("#species_information").prop('checked', true);
                        }
                        if (arr[i].trim() === 'N') {
                            $("#species_undefined").prop('checked', true);
                        }
                    }
                }
                $("#profile_company").val(res.company);
                $("#profile_last_name").val(res.lastName);
                $("#profile_first_name").val(res.firstName);

                $("#profile_email").val(data.QV105);
                $("#profile_mobile").val(data.QV106);
                $("#profile_phone").val(data.QV107);
                $("#profile_fax").val(data.QV108);
            }
            hideLoading();
        }
    });
}

function resetForm() {
    $("#priority_hight").prop('checked', false);
    $("#priority_medium").prop('checked', false);
    $("#priority_low").prop('checked', false);
    $("#status_opening").prop('checked', false);
    $("#status_doing").prop('checked', false);
    $("#status_finish").prop('checked', false);
    $("#device_mail").prop('checked', false);
    $("#device_sms").prop('checked', false);
    $("#device_phone").prop('checked', false);
    $("#species_mechanical").prop('checked', false);
    $("#species_electric").prop('checked', false);
    $("#species_information").prop('checked', false);
    $("#species_undefined").prop('checked', false);
    $("#profile_email").val();
    $("#profile_mobile").val();
    $("#profile_phone").val();
    $("#profile_fax").val();
}

function changeLanguage(idButton,val) {
    if (val == 'vi') {
            $("#" + idButton + "").text('Tiếng việt');
        }
        if (val == 'en') {
            $("#" + idButton + "").text('English');
        }
        if (val == 'de') {
            $("#" + idButton + "").text('Dustch');
        }
    console.log('--changeLanguage--');
    $.ajax({
        type: "POST",
        url: "/facilio/changeLanguage",
        data: {QV115: val},
        dataType: "json",
        success: function (res) {
            console.log('------res------');
            console.log(res);
            location.reload();
        }
    });
    location.reload();
}

function saveProfile() {
    showLoading();
    device = '';
    type = '';
    pri1 = 0;
    pri2 = 0;
    pri3 = 0;
    stt1 = 0;
    stt2 = 0;
    stt3 = 0;
    var arVal = [];
    $("#dl_change_profile .receive-email").each(function () {
        $(this).find(".custom-checkbox input:checked").each(function () {
            var val = $(this).val();
            if (val !== undefined) {
                arVal.push(val);
            }
        })
    });
    for (var i = 0; i < arVal.length; i++) {
        if (arVal[i] == 'mail') {
            device = device + 'M, ';
        }
        if (arVal[i] == 'sms') {
            device = device + 'S, ';
        }
        if (arVal[i] == 'phone') {
            device = device + 'P, ';
        }
        if (arVal[i] == 'mechanical') {
            type = type + 'M, ';
        }
        if (arVal[i] == 'electric') {
            type = type + 'E, ';
        }
        if (arVal[i] == 'information') {
            type = type + 'I, ';
        }
        if (arVal[i] == 'undefined') {
            type = type + 'N, ';
        }
        if (arVal[i] == 'high') {
            pri1 = 1;
        }
        if (arVal[i] == 'medium') {
            pri2 = 2;
        }
        if (arVal[i] == 'low') {
            pri3 = 3;
        }
        if (arVal[i] == 'opening') {
            stt1 = 1;
        }
        if (arVal[i] == 'doing') {
            stt2 = 2;
        }
        if (arVal[i] == 'finish') {
            stt3 = 10;
        }
    }
    profile.editProfile(data, pri1, pri2, pri3, stt1, stt2, stt3,
            $("#profile_email").val(), $("#profile_mobile").val(), $("#profile_phone").val(), $("#profile_fax").val(),
            timez, language, device, type);
    $.ajax({
        type: "POST",
        url: "/profile/create_dataq100",
        data: profile.data,
        dataType: "json",
        success: function (res) {
            console.log(res);
            hideLoading();
            if (res.status === "success") {
                // swalSuccess(lang['_update_success'], lang['_update_success']);
                swalSuccess(undefined, res.message);
                closeDialog('#dl_change_profile');
            } else {
                // swalError(lang['_error'], lang['_update_failed']);
                swalError(undefined, res.message);
            }
        }
    });
}

function checkPassword() {
    var oldPass = $("#old_password").val();
    var newPass = $("#new_password").val();
    var cPass = $("#confirm_password").val();
    if (CryptoJS.MD5(oldPass) === data.QV102) {
        if (newPass.trim() === cPass.trim()) {
            data.QV102 = CryptoJS.MD5(newPass);
            closeDialog('#dl_change_password');
        } else {
            swalError(lang['_error'], lang['_Confirm_password_fail']);
        }
    } else {
        swalError(lang['_error'], lang['_current_password_fail']);
    }
}

function loadSelectTimezone() {
    var arr = timezone();
    for (i = 0, length = arr.length; i < length; i++) {
        $('#select_timezone').append($("<a class='dropdown-item qb-dropdown-item' href='javascript:void(0)' onclick='select(" + '"textTimeZone"' + "," + i + ")'>")
                .append(arr[i]));
    }
}

function select(idButton, value) {
    if (idButton === 'textTimeZone') {
        timez = timezoneCompact[value];
        $("#" + idButton + "").text(limitStr(timezone()[value], 38));
    } else {
        language = value;
        if (value == 'vi') {
            $("#" + idButton + "").text('Tiếng việt');
        }
        if (value == 'en') {
            $("#" + idButton + "").text('English');
        }
        if (value == 'de') {
            $("#" + idButton + "").text('Dustch');
        }
    }
}

