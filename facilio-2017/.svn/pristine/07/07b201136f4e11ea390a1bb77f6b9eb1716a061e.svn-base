/******************************************/
/*********FUNC OPEN POPUP SLIDER**********/
/*****************************************/

// Open Popup Slider
function openPopupSlider(actionSelect, idPopup, classActiveElement, elementActive, classActiveElement1) {

  // Open Popup Slider
  $(document).on('click', actionSelect, function (e) {
    e.preventDefault();
    if ($(idPopup).hasClass('on')) {
      $(window).off('scroll'); // Remove Stop Scroll Page
      $(idPopup).removeClass('on');
      if (!!classActiveElement)
        $(this).removeClass(classActiveElement);
      if (!!elementActive && !!classActiveElement1)
        $(elementActive).removeClass(classActiveElement1);
    } else {
      // Stop Scroll Page
      var current = $(window).scrollTop();
      $(window).scroll(function () {
        $(window).scrollTop(current);
      });
      $(idPopup).addClass('on');
      if (!!classActiveElement)
        $(this).addClass(classActiveElement);
      if (!!elementActive && !!classActiveElement1)
        $(elementActive).addClass(classActiveElement1);
    }
    // hide scroll bar
    setTimeout(function () {
      $('html').css('overflow', 'hidden');
    }, 200);

  });

  // Close Popup Slider When Click Outside
  $(document).on('click', idPopup, function (e) {
    if ($(e.target).closest('.popup-slider-content').length === 0) {
      $(window).off('scroll');
      // show scroll bar
      $('html').css('overflow-y', 'auto');
      $(idPopup).removeClass('on');
      if (!!classActiveElement)
        $(actionSelect).removeClass(classActiveElement);
      if (!!elementActive && !!classActiveElement1)
        $(elementActive).removeClass(classActiveElement1);
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
    if (!!classActiveElement)
      $(actionSelect).removeClass(classActiveElement);
    if (!!elementActive && !!classActiveElement1)
      $(elementActive).removeClass(classActiveElement1);
  });

}

function openPopupSlider_startfnc(actionSelect, idPopup, classActiveElement, elementActive, classActiveElement1, callback_open, callback_close) {
  /**
   * in case use same "idPopup", lastest eventListener will override the others
   */

  // Close Popup Slider When Click Outside
  $(document).off('click', idPopup).on('click', idPopup, function (e) {
    e.preventDefault
    if ($(e.target).closest('.popup-slider-content').length === 0) {
      $(window).off('scroll');
      // show scroll bar
      $('html').css('overflow-y', 'auto');
      $(idPopup).removeClass('on');
      if (!!classActiveElement)
        $(actionSelect).parent().children().removeClass(classActiveElement);
      if (!!elementActive && !!classActiveElement1)
        $(elementActive).removeClass(classActiveElement1);
      callback_close === 'function' && callback_close(this, e)
    }
  });

  // Close Popup Slider When Click Button Close
  $(document).off('click', idPopup + ' .close-popup-slider').on('click', idPopup + ' .close-popup-slider', function (e) {
    e.preventDefault;
    $(window).off('scroll');
    var id = '#' + $(this).parents('.popup-slider').attr('id');
    $(id).removeClass('on');
    // show scroll bar
    $('html').css('overflow-y', 'auto');
    if (!!classActiveElement)
      $(actionSelect).parent().children().removeClass(classActiveElement);
    if (!!elementActive && !!classActiveElement1)
      $(elementActive).removeClass(classActiveElement1);
    callback_close === 'function' && callback_close(this, e)
  });

  // Open Popup Slider
  $(document).off('click', actionSelect).on('click', actionSelect, function (e) {
    e.preventDefault();
    if ($(idPopup).hasClass('on')) {
      $(window).off('scroll'); // Remove Stop Scroll Page
      $(idPopup).removeClass('on');
      if (!!classActiveElement)
        $(this).removeClass(classActiveElement);
      if (!!elementActive && !!classActiveElement1)
        $(elementActive).removeClass(classActiveElement1);
    } else {
      // Stop Scroll Page
      var current = $(window).scrollTop();
      $(window).scroll(function () {
        $(window).scrollTop(current);
      });
      $(idPopup).addClass('on');
      if (!!classActiveElement)
        $(this).addClass(classActiveElement);
      if (!!elementActive && !!classActiveElement1)
        $(elementActive).addClass(classActiveElement1);
    }
    // hide scroll bar
    setTimeout(function () {
      $('html').css('overflow', 'hidden');
    }, 200);
    callback_open === 'function' && callback_open(this, e);
  });

}


/******************************************/
/************FUNC OPEN DIALOG*************/
/*****************************************/
// Func open dialog
function openDialog(actionSelect, idDialog, classActiveSelector, callback) {

  $(document).on('click', actionSelect, function (e) {
    e.preventDefault();
    $(idDialog).addClass('on');
    $(idDialog).find('.qb-dialog-overlay').addClass('open');
    if (!!classActiveSelector)
      $(this).addClass(classActiveSelector);
    if (callback === 'function' && typeof callback === 'function')
      callback(this);
  });

  // Close Dialog When Click Body
  $(document).on('click', idDialog + ' .qb-dialog-overlay', function (e) {
    if ($(e.target).closest('.qb-dialog-body').length === 0) {
      $(this).closest(idDialog).removeClass('on');
      $(this).removeClass('open');
      if (!!classActiveSelector)
        $(actionSelect).removeClass(classActiveSelector);
    }
  });

  // Close Dialog When Click Icon Close
  $(document).on('click', idDialog + ' .close-dialog', function (e) {
    e.preventDefault();
    $(this).closest(idDialog).removeClass('on');
    $(this).closest(idDialog).find('.qb-dialog-overlay').removeClass('open');
    if (!!classActiveSelector)
      $(actionSelect).removeClass(classActiveSelector);
  });
}


function openDialog_cb(actionSelect, idDialog, classActiveSelector, callback_open, callback_close) {

  $(document).off('click', actionSelect).on('click', actionSelect, function (e) {
    e.preventDefault();
    $(idDialog).addClass('on');
    $(idDialog).find('.qb-dialog-overlay').addClass('open');
    if (!!classActiveSelector)
      $(this).addClass(classActiveSelector);
    callback_open === 'function' && callback_open(this, e);
  });

  // Close Dialog When Click Body
  $(document).off('click', idDialog + ' .qb-dialog-overlay')
    .on('click', idDialog + ' .qb-dialog-overlay', function (e) {
      if (!$(e.target).parents('.qb-dialog-body').length) {
        $(idDialog).removeClass('on');
        $(this).removeClass('open');
        if (!!classActiveSelector)
          $(actionSelect).removeClass(classActiveSelector);
        callback_close === 'function' && callback_close(this, e);
      }
    });

  // Close Dialog When Click Icon Close
  $(document).off('click', idDialog + ' .close-dialog').on('click', ' .close-dialog', function (e) {
    e.preventDefault();
    $(idDialog).removeClass('on');
    $(idDialog).find('.qb-dialog-overlay').removeClass('open');
    if (!!classActiveSelector)
      $(actionSelect).removeClass(classActiveSelector);
    callback_close === 'function' && callback_close(this, e);
  });
}


// Func close dialog
function closeDialog(idDialog) {
  if ($(idDialog).hasClass('on')) {
    $(idDialog).removeClass('on');
    $(idDialog + ' .qb-dialog-overlay').removeClass('open');
  }
}

// Display Colums Default
function tblRenderDefault() {
  var arr = [];
  $('.cb-table').each(function () {
    arr.push(parseInt($(this).val()));
  });
  tblRender($('#pm_table'), arr);
}

// Render Table
function tblRender(table, arr) {
  for (var i = 0; i < arr.length; i++) {
    var idx = i + 1,
      selector = 'th:nth-child(' + idx + '), td:nth-child(' + idx + ')';
    if (!arr[i])
      table.find(selector).hide();
    else
      table.find(selector).show();
  }
}


/******DATE TIME PICKER********/

//jQuery.datetimepicker.setLocale('vi'); //SETUP LANGUAGE FOR DATE TIME
/******ONLY DATE PICKER *****/
// $('#qb_date_time').datetimepicker({
//   timepicker: false,
//   format: 'd/m/Y'
// });
/*******ONLY TIME PICKER*****/
// $('#qb_time_clock').datetimepicker({
//   datepicker: false,
//   format: 'H:i'
// });

$('input[name="daterange"]').daterangepicker({
  opens: "center",
  locale: {
    format: 'DD/MM/YYYY'
  }
});

// Create Seekbar
function createSneekbar(idSneekBar, selectionVal) {
  var val = ($(idSneekBar).val() - $(idSneekBar).attr('min')) / ($(idSneekBar).attr('max') - $(idSneekBar).attr('min'));
  $(idSneekBar).css('background-image',
    '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', var(--turquoise)), ' + 'color-stop(' + val + ', var(--light-blue-grey))' + ')'
  );
  $(selectionVal).text($(idSneekBar).val() + '%');
  $(idSneekBar).on('change', function () {
    val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    $(this).css('background-image',
      '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', var(--turquoise)), ' + 'color-stop(' + val + ', var(--light-blue-grey))' + ')'
    );
    $(selectionVal).text($(this).val() + '%');
  });
  return true;
}

// Set value seekbar
function setValSeekbar(idSneekBar, value, idSelector) {
  $(idSneekBar).val(value);
  var val = (value - $(idSneekBar).attr('min')) / ($(idSneekBar).attr('max') - $(idSneekBar).attr('min'));
  $(idSneekBar).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', var(--turquoise)), ' + 'color-stop(' + val + ', var(--light-blue-grey))' + ')');
  $(idSelector).text(value + '%');
}

// Func create dropdown select box
//if (location.pathname.toLowerCase().indexOf('b200pm') > -1) $('.qb-dropdown').text('\u00a0');
function createDropdown(idDropdown, valSelected) {
  // Add class active when click chose item
  $(idDropdown + ' a.qb-dropdown-item').on('click', function (e) {
    e.preventDefault();
    $(this).closest(idDropdown).find('a.qb-dropdown-item').removeClass('active');
    $(this).closest(idDropdown).find('a.qb-dropdown-item').attr('data-select', 'false');
    $(this).addClass('active');
    $(this).attr('data-select', 'true');
    $(this).closest(idDropdown).find('.qb-dropdown').text(limitStr($(this).text()));
  });

  // Find and set value item selected
  $(idDropdown).find('a.qb-dropdown-item').each(function () {
    var sel = $(this).attr('data-select'), valItem = $(this).attr('data-value');
    valSelected = typeof valSelected === 'number' ? valSelected.toString() : valSelected;
    if (!!valSelected) {
      if (valItem === valSelected) {
        $(this).attr('data-select', 'true');
        $(this).addClass('active');
        $(this).closest(idDropdown).find('.qb-dropdown').text(limitStr($(this).text()));
      }
    } else {
      if (!!sel) {
        if (sel === 'true') {
          $(this).addClass('active');
          $(this).closest(idDropdown).find('.qb-dropdown').text(limitStr($(this).text()));
        }
      } else {
        $(this).closest(idDropdown).find('.qb-dropdown').text(limitStr($(this).closest(idDropdown).find('a.qb-dropdown-item').first().text()));
      }
    }
  });

  // hiển thị dropdown menu lên trên table

  $(".dropdown").on("show.bs.dropdown", function () {
    var $btnDropDown = $(this).find(".dropdown-toggle");
    var $listHolder = $(this).find(".dropdown-menu");
    //reset position property for DD container
    $(this).css("position", "static");
    $listHolder.css({
      top: ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
      left: $btnDropDown.offset().left + "px"
    });
    $listHolder.data("open", true);
  });

  //add BT DD hide event
  $(".dropdown").on("hidden.bs.dropdown", function () {
    var $listHolder = $(this).find(".dropdown-menu");
    $listHolder.data("open", false);
  });

}


