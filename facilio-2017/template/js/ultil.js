/******************************************/
/*********FUNC OPEN POPUP SLIDER**********/
/*****************************************/

// Open Popup Slider
function openPopupSlider(actionSelect, targetSelector, classActiveElement, elementActive, classActiveElement1) {

    // Open Popup Slider
    $(document).on('click', actionSelect, function (e) {
        e.preventDefault();
        if ($(targetSelector).hasClass('on')) {
            $(window).off('scroll'); // Remove Stop Scroll Page
            $(targetSelector).removeClass('on');
            if (classActiveElement !== undefined) {
                $(this).removeClass(classActiveElement);
            }
            if (elementActive !== undefined && classActiveElement1 !== undefined) {
                $(elementActive).removeClass(classActiveElement1);
            }
        } else {
            // Stop Scroll Page
            var current = $(window).scrollTop();
            $(window).scroll(function () {
                $(window).scrollTop(current);
            });
            $(targetSelector).addClass('on');
            if (classActiveElement !== undefined) {
                $(this).addClass(classActiveElement);
            }
            if (elementActive !== undefined && classActiveElement1 !== undefined) {
                $(elementActive).addClass(classActiveElement1);
            }
        }
        // hide scroll bar
        setTimeout(function () {
            $('html').css('overflow', 'hidden');
        }, 200);

    });

    // Close Popup Slider When Click Outside
    $(document).on('click', targetSelector, function (e) {
        if ($(e.target).closest('.popup-slider-content').length === 0) {
            $(window).off('scroll');
            // show scroll bar
            $('html').css('overflow-y', 'auto');
            $(targetSelector).removeClass('on');
            if (classActiveElement !== undefined) {
                $(actionSelect).removeClass(classActiveElement);
            }
            if (elementActive !== undefined && classActiveElement1 !== undefined) {
                $(elementActive).removeClass(classActiveElement1);
            }
        }

    });

    // Close Popup Slider When Click Button Close
    $(document).on('click', '.close-popup-slider', function (e) {
        e.preventDefault();
        $(window).off('scroll');
        var id = '#' + $(this).parents('.popup-slider').attr('id');
        $(id).removeClass('on');
        // show scroll bar
        $('html').css('overflow-y', 'auto');
        if (classActiveElement !== undefined) {
            $(actionSelect).removeClass(classActiveElement);
        }
        if (elementActive !== undefined && classActiveElement1 !== undefined) {
            $(elementActive).removeClass(classActiveElement1);
        }
    });

}

/******************************************/
/************FUNC OPEN DIALOG*************/
/*****************************************/

function openDialog(actionSelect, targetSelector, classActiveSelector) {

    // Open Dialog
    $(document).on('click', actionSelect, function (e) {
        e.preventDefault();
        $(targetSelector).addClass('on');
        $('.qb-dialog-overlay').addClass('open');
        if (classActiveSelector !== undefined) {
            $(this).addClass(classActiveSelector);
        }
    });

    // Stop Close Dialog When Click Dialog Content
    $(document).on('click', '.qb-dialog-body', function (e) {
        e.stopPropagation();
    });

    // Close Dialog When Click Body
    $(document).on('click', '.qb-dialog-overlay', function (e) {
        e.preventDefault();
        $(targetSelector).removeClass('on');
        $('.qb-dialog-overlay').removeClass('open');
        if (classActiveSelector !== undefined) {
            $(actionSelect).removeClass(classActiveSelector);
        }
    });

    // Close Dialog When Click Icon Close
    $(document).on('click', '.close-dialog', function (e) {
        e.preventDefault();
        $(targetSelector).removeClass('on');
        $('.qb-dialog-overlay').removeClass('open');
        if (classActiveSelector !== undefined) {
            $(actionSelect).removeClass(classActiveSelector);
        }
    });

}

/******DATE TIME PICKER********/
/*NOTE: Add libs in html
 * <link href="dist/datetimepicker-master/jquery.datetimepicker.css" rel="stylesheet" type="text/css"/>
 * <script src="dist/datetimepicker-master/build/jquery.datetimepicker.full.js" type="text/javascript"></script>
 */

//jQuery.datetimepicker.setLocale('vi'); //SETUP LANGUAGE FOR DATE TIME
/******ONLY DATE PICKER *****/
$('#qb_date_time').datetimepicker({
    timepicker: false,
    format: 'd/m/Y'
});
/*******ONLY TIME PICKER*****/
$('#qb_time_clock').datetimepicker({
    datepicker: false,
    format: 'H:i'
});
/*********************************/
/*******RANGE SLIDER************/
/*********************************/
/*NOTE: Add libs in html
 * <link href="dist/bootstrap-daterangepicker-master/daterangepicker.css" rel="stylesheet" type="text/css"/>
 * <script src="dist/bootstrap-daterangepicker-master/moment.js" type="text/javascript"></script>
 * <script src="dist/bootstrap-daterangepicker-master/daterangepicker.js" type="text/javascript"></script>
 */
$('#qb_range').slider({
    range: "min",
    max: 100,
    value: 30,
    slide: function (event, ui) {
        $("#currentVal").val(ui.value + "%");
    }
});
$('#qb_daterange').daterangepicker({
    "opens": "center",
    locale: {
        format: 'DD/MM/YYYY'
    }
});

/*********************************/
/*******FORMAT CURRENCY************/
/*********************************/

function FormatCurrency(ctrl) {
    if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
        return;
    }

    var val = ctrl.value;

    val = val.replace(/,/g, "")
    ctrl.value = "";
    val += '';
    x = val.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';

    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

    ctrl.value = x1 + x2;
}

function CheckNumeric() {
    return event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 46;
}

function formatLable(value) {
    val = value.replace(/,/g, "")
    val += '';
    x = val.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}