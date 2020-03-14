/**
 * @Author: hyn
 * @Create: 9/3/2017
 * @Module: n850
 */
var C050ViewModel = function () {
  var self = this;
  // LIST
  self.c050_arr = ko.observableArray();

  // VAR
  self.pnLIMIT = ko.observable(10);

  // 

  self.initCalendar = 0;
  self.init = function () {
    self.evenListener();
    self.fullcalendar();
    self.trumbowyg();
    self.daterange();
  }

  self.evenListener = function () {
    $(document).off('click', '#dialog_add_event .btn-save').on('click', '#dialog_add_event .btn-save', function (e) {
      e.preventDefault();
      self.saveEvent();
    });

    $(document).off('click', '#dialog_add_event .btn-delete').on('click', '#dialog_add_event .btn-delete', function (e) {
      e.preventDefault();
      self.delete_event();
    });
    openDialog_cb('input.event-trigger', '#dialog_add_event', '', function (_this, e) {
    }, self);
  };

  self.fullcalendar = function () {
    var today = moment().format('YYYY-MM-DD');
    $('#calendar').fullCalendar({
      header: {
        right: 'prev,today,next',
        center: 'title',
        left: 'month,basicWeek,basicDay bin'
      },
      views: {
        month: {
          titleFormat: 'MMMM, YYYY'
        },
        week: {
          titleFormat: 'DD MMMM YYYY'
        },
        day: {
          titleFormat: 'DD MMMM YYYY'
        }
      },
      now: today,
      locale: 'vi',
      defaultDate: $('#calendar').fullCalendar('today'),
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: 4, //display max 3 event per cell 
      firstDay: 1, //monday
      handleWindowResize: true,
      selectable: true,
      unselectAuto: true,
      unselectCancel: '',
      selectMinDistance: 1,
      showNonCurrentDates: true,
      droppable: true,
      dragRevertDuration: 0,
      selectOverlap: function (event) { // bool -> free to select any period of time, function: check to return bool
        return true;
      },
      selectAllow: function (selectInfo) { // receive information about where the user is attempting to select, must return bool
        return moment(selectInfo.end).subtract(1, 'day') > moment(selectInfo.start);
      },
      dayClick: function (date, jsEvent, view) { // Triggered when the user clicks on a date or a time.
        var start = date.hour(6).utc(),
          end = date.add(1, 'day').hour(23).utc();
        self.eventDetail({ start: start, end: end, id: 0 });
      },
      select: function (start, end, jsEvent, view) { // Triggered when a date/time selection is made
        self.eventDetail({ start: start, end: end, id: 0 });
      },
      eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
        $('input.event-trigger').val(JSON.stringify(event.id));
        self.saveEvent(event);
      },
      events: function (start, end, timezone, callback) {
        $('.fc-icon.fc-icon-faci-delete').addClass('faci-delete');
        self.list_c050(start, end, timezone, callback);
      },
      eventClick: function (event, jsEvent, view) {
        self.eventDetail(event);
      },
      eventAfterRender: function (event, element, view) {
        self.calendar_evenListener();
      },
    })
  };

  self.dropIn = function (el, jsEvent) {
    var trashEl = $(el),
      offset = trashEl.offset(),
      x1 = offset.left,
      x2 = offset.left + trashEl.outerWidth(true),
      y1 = offset.top,
      y2 = offset.top + trashEl.outerHeight(true);
    return jsEvent.pageX >= x1 && jsEvent.pageX <= x2 && jsEvent.pageY >= y1 && jsEvent.pageY <= y2;
  };

  self.calendar_evenListener = function () {

    $(document).off('mouseenter', '#calendar .fc-bin-button.active').on('mouseenter mouseleave', '#calendar .fc-bin-button.active', function (e) {
      if ($('.fc-event-container.dragging').length) {
        $(this).addClass('move-in');
        $('.fc-event-container').addClass('active');
      }
    })

    $(document).off('mouseleave', '#calendar .fc-bin-button.active').on('mouseleave', '#calendar .fc-bin-button.active', function (e) {
      if ($('.fc-event-container.dragging').length) {
        $(this).removeClass('move-in');
        $('.fc-event-container').removeClass('active');
      }
    })
  };

  self.list_c050 = function (start, end, timezone, callback) {
    /**
     * since fullCalendar not init there isn't 'getCalendar'
     * -> dont use '.fullCalendar('getCalendar').view' out of IF
    */
    var CD053 = start.parseZone().format(),
      CD054 = end.parseZone().format();
    $.ajax({
      url: '/c050/new_list_c050?pdCD053=' + CD053 + '&pdCD054=' + CD054,
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        if (res.status === 'success') {
          var event = [];
          for (let i = 0; i < res.data.length; i++) {
            const item = res.data[i],
              event_data = {
                id: item.PC050,
                title: item.CV052,
                start: item.CD053,
                end: item.CD054,
                title: item.CV052,
                CV051: item.CV051
              }
            event.push(event_data);
          }
          callback(event);
        }
      },
      complete: function () {
        self.initCalendar = 1;
      }
    })
  };

  self.eventDetail = function (event, openDialog) {
    $('.btn-save').attr('disabled', false);
    var self = this,
      title = event.title || '',
      start = !!event ? event.start : moment().parseZone().format(),
      end = !!event ? event.end : moment().parseZone().format(),
      midnightEnd = !(moment(end).parseZone().hours()),
      wrongOrder = moment(start).isAfter(end, 'second');
    $('input.event-trigger').val(JSON.stringify(event.id));
    $('input.event-trigger').trigger('click');
    // set text for editor
    $('#editor').trumbowyg('html', title);
    // set start-end date for date-range-picker
    $('#add_event [name="CD05X"]').data('daterangepicker').setStartDate(start);
    $('#add_event [name="CD05X"]').data('daterangepicker').setEndDate(
      wrongOrder ? start : (midnightEnd ? moment(end).subtract('hour', 1) : end)
      // |-> prevent set start date after end date
    );
  };

  self.saveEvent = function (data) {
    //  !!data ? create new : edit
    var self = this,
      eventID = !!data ? data.id : JSON.parse($('input.event-trigger').val() || '0'),
      CV052 = $('#editor').trumbowyg('html'),
      date_data = $('[name="CD05X"]').data('daterangepicker'),
      // moment obj datetime
      moment_start = !!data ? data.start : date_data.startDate,
      //-----------one-day event dont have end in Event OBJ
      moment_end = (data && data.end) ? data.end : (data && !data.end) ? data.start : date_data.endDate,
      // human-friendly datetime
      CD053 = moment(moment_start).utc().format(),
      CD054 = moment(moment_end).utc().format(),
      event_data = !!data ? [data] : $('#calendar').fullCalendar('clientEvents', +eventID);

    if (!data & !CV052) { // edit view & empty title
      swalWarning('Vui lòng nhập nội dung', '', 5000); //title, text, time, callback
    } else {
      if (!event_data.length) event_data = [{}];
      if (!data) { // edit view
        event_data[0].title = CV052;
      }
      event_data[0].start = moment_start;
      event_data[0].end = moment_end;
      $('#dialog_add_event .btn-save').attr('disabled', true)
      // save server's event
      $.ajax({
        url: '/c050/new_insert_c050',
        dataType: 'JSON',
        type: 'POST',
        data: {
          pnPC050: eventID,
          pvCV051: event_data[0].CV051 || '',
          pvCV052: !!data ? data.title : CV052,
          pdCD053: CD053,
          pdCD054: CD054,
        },
        success: function (res) {
          if (res.status === 'success' && res.data > 0) {
            swalSuccess(lang['_update_success']);
            $('.faci-close').trigger('click');
            // save client-view's event
            // "EVENT_DATA": MUST BE THE ORIGINAL, NOT MERELY A RECONSTRUCTED OBJECT
            $('#calendar').fullCalendar(eventID ? 'updateEvent' : 'renderEvent', event_data[0]); // update existed-event or create new one
            //current insert not return PC500, so reload is require to prevent later delete fail || insert new
            location.reload()
            $('#dialog_add_event .btn-save').attr('disabled', false)
          } else {
            swalError(lang['_update_fail']);
          }
        }
      });
    }
  };

  self.delete_event = function () {
    var id = +$('input.event-trigger').val(),
      delete_len = $('#calendar').fullCalendar('clientEvents', id).length;
    swalComfirm(lang['_delete_event'], lang['_confirm_delete_event'], function (ans) {
      if (ans.value) {
        $('.btn-save').attr('disabled', true);
        $.ajax({
          url: '/c050/new_storno_c050',
          dataType: 'JSON',
          type: 'POST',
          data: { pnPC050: id },
          success: function (res) {
            if (res.status === 'success' && res.data > 0 && delete_len === 1) {
              swalSuccess(lang['_delete_success']);
              $('#calendar').fullCalendar('removeEvents', id);
              $('.faci-close').trigger('click');
            } else {
              swalError(lang['_delete_fail']);
            }
          }
        })
      }
    }, lang['_deletes']);
  };

  self.calendar_monthrange = function () {
    var calendar = $('#calendar').fullCalendar('getCalendar').view,
      start = calendar.start,
      end = calendar.end;
    return { start, end };
  }

  self.trumbowyg = function () {
    // set path for editor's icon
    if (!!$.trumbowyg) $.trumbowyg.svgPath = '../html/dist/trumbowyg/icons.svg';
    $('#editor').trumbowyg();
  };

  self.daterange = function () {
    $('[name="CD05X"]').daterangepicker({
      "parentEl": " #add_event .form-group",
      "drops": "down",
      "timePicker": true,
      "timePicker24Hour": true,
    })
  };
}
var c050VM = new C050ViewModel();
ko.applyBindings(c050VM);
c050VM.init();
