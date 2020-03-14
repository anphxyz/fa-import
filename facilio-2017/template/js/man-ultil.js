/*// Get the report modal
 var reportModal = document.getElementById('reportModal');
 // Get the update modal
 var updateModal = document.getElementById('updateModal');
 
 // Get the button that opens the modal
 var btnReport = document.getElementById("btn-report");
 
 // Get the button that opens the modal
 var btnUpdate = document.getElementById("btn-update");
 
 var span1 = document.getElementsByClassName("report_close")[0];
 // Get the <span> element that closes the modal
 var span2 = document.getElementsByClassName("update_close")[0];
 
 // When the user clicks the button, open the modal 
 btnReport.onclick = function () {
 reportModal.style.display = "block";
 }
 // When the user clicks the button, open the modal 
 btnUpdate.onclick = function () {
 updateModal.style.display = "block";
 }
 
 span1.onclick = function () {
 reportModal.style.display = "none";
 }
 
 // When the user clicks on <span> (x), close the modal
 span2.onclick = function () {
 updateModal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
 if (event.target == updateModal) {
 updateModal.style.display = "none";
 }
 if (event.target == reportModal) {
 reportModal.style.display = "none";
 }
 }*/
 function show_check_menu() {
 var x = document.getElementById("check_menu_table");
 if (x.style.display === "none") {
 x.style.display = "block";
 } else {
 x.style.display = "none";
 }
 }
// Get the modal
var search_modal = document.getElementById('searchModal');

// Get the button that opens the modal
var btn_search = document.getElementById("btn_search");

// Get the <span> element that closes the modal
var btn_close = document.getElementsByClassName("btnclose")[0];

// When the user clicks the button, open the modal 
btn_search.onclick = function () {
    search_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btn_close.onclick = function () {
    search_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == search_modal) {
        search_modal.style.display = "none";
    }
}

/***************************************************************************/
var temp_txt = [];
var temp_checkbox = [];
var temp_radiobutton = [];
$(document).on('click', '.qb-edit', function () {
    var i = 0;
    console.log($(this).parent().siblings('td.data'));
    $(this).parent().siblings('td.data').each(function () {
        var content = $(this).html();
        temp_txt[i] = content;
        i++;
        $(this).html('<input value="' + content + '" class="' + 'input-data' + '"/>');
    });
    i = 0;
    $(this).closest('td').siblings().find('.qb-checkbox').each(function () {
        temp_checkbox[i] = $(this).is(":checked");
        i++;
    });
    i = 0;
    $(this).parent().siblings('td.td9-child').each(function () {
        var content = $(this).html();
        if (content) {
            temp_radiobutton[i] = true;
        } else {
            temp_radiobutton[i] = false;
        }
        $(this).html('<label class="qb-container"><input type="radio" name="radio" class="qb-radio"'
                + ' value="' + i + '"><span class="qb-checkmark"></span></label>');
        i++;
    });
    i = 0;
    $('.qb-radio').each(function () {
        $(this).prop('checked', temp_radiobutton[i]);
        i++;
    });
    $('.qb-checkbox').removeAttr('disabled');
    $(this).siblings('.qb-save').show();
    $(this).siblings('.qb-cancle').show();
    $(this).siblings('.qb-delete').hide();
    $(this).hide();

});

$(document).on('click', '.qb-save', function () {
    $('.input-data').each(function () {
        var content = $(this).val();
        $(this).html(content);
        $(this).contents().unwrap();
    });
    $('.qb-checkbox').attr({'disabled': 'disabled'});
    $('.qb-radio').each(function () {
        var content = "";
        if ($(this).is(":checked")) {
            content = "x"
        }
        $(this).closest('td').html(content);
    });
    $(this).siblings('.qb-edit').show();
    $(this).siblings('.qb-delete').show();
    $(this).hide();
    $(this).siblings('.qb-cancle').hide();
});
$(document).on('click', '.qb-cancle', function () {
    var i = 0;
    $('.input-data').each(function () {
        var content = temp_txt[i];
        i++;
        $(this).html(content);
        $(this).contents().unwrap();
    });
    i = 0;
    $('.qb-checkbox').each(function () {
        $(this).prop('checked', temp_checkbox[i]);
        i++;
    });
    $('.qb-checkbox').attr({'disabled': 'disabled'});
    $(this).siblings('.qb-edit').show();
    $(this).siblings('.qb-delete').show();
    $(this).hide();
    $(this).siblings('.qb-save').hide();
});

$(document).on('click', '.qb-delete', function () {
    $(this).parents('tr').remove();
});

$('.btn-add').click(function () {
    $('.qb-item-table').parents('.qb-table').append('<tr>'
            + '<td class="td1"></td>'
            + '<td class="td2 data"></td>'
            + '<td class="td3 data"></td>'
            + '<td class="td4 data"></td>'
            + '<td class="td5"><label class="qb-switch"><input type="checkbox" class="qb-checkbox" disabled><span class="qb-slider round"></span></label></td>'
            + '<td class="td6 data"></td>'
            + '<td class="td7 data"></td>'
            + '<td class="td8"><label class="qb-switch"><input type="checkbox" class="qb-checkbox" disabled><span class="qb-slider round"></span></label></td>'
            + '<td class="td9-child"></td>'
            + '<td class="td9-child"></td>'
            + '<td class="td9-child"></td>'
            + '<td class="td9-child"></td>'
            + '<td class="td9-child"></td>'
            + '<td class="td9-child"></td>'
            + '<td class="td9-child"></td>'
            + '<td class="td9-child"></td>'
            + '<td class="td10 data"></td>'
            + '<td class="td11">'
                +'<a class="qb-edit"><span class="faci-edit "></span></a>'
                +'<a class="qb-save"><span class="faci-check "></span></a>'
                +'<a class="qb-cancle"><span class="faci-close"></span></a>'
                +'<a class="qb-copy"><span class="faci-File4"></span></a>'
                +'<a class="qb-delete"><span class="faci-delete"></span></a>'
            + '</tr>');
   // $('.qb-edit').trigger("click");    
});