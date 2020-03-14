/**
 * @Author: hyn
 * @Create: 9/3/2017
 * @Module: n100
 */
var N100ViewModel = function () {
  var self = this;
  // LIST
  self.table_n100_tr = ko.observableArray();

  // VAR
  self.pnLIMIT = ko.observable(15);

  self.init = function () {
    self.eventListener();
    self.option_list();
    self.list_n100();
  };
  // ==============================================
  // ==============EVENT LISTENER==================
  // ==============================================
  self.eventListener = function () {
    // search n100 by last-name
    $(document).off('click', '#searchModal .qb-button').on('click', '#searchModal .qb-button', function (e) {
      self.list_n100({ pvNV103: $('#searchModal .qb-input').val() });
    });
    // enter to search n100 by last-name
    $(document).off('keyup', '#searchModal .qb-input').on('keyup', '#searchModal .qb-input', function (e) {
      if (e.type === 'keyup' && e.keyCode === 13) {
        $('#searchModal .qb-button').trigger('click');
      }
    });

    // request new list after closing search-input
    $(document).off('click', '#searchModal .btn-close').on('click', '#searchModal .btn-close', function (e) {
      $('.search-modal').removeClass('show');
      self.list_n100();
    });

    // open add-employee dialog
    openDialog_cb('.n100-wrapper button.insert', '#dialog_add_personnel', '', function () {
      // reset form
      $(':input', '#add_n100_form')
        .not(':button, :submit, :reset, :hidden, :radio')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      self.date_picker();
      add_n100_form.lang = 0;
      $('#add_n100_form [name="NV106"]').attr('readonly', false);
      $('#add_n100_form').get(0).reset();
      $('#add_n100_form [name="NV106"]').removeClass('valid error');
    })


    // save employee info
    $(document).off('click', '#dialog_add_personnel .btn-save').on('click', '#dialog_add_personnel .btn-save', function (e) {
      self.save_n100(+add_n100_form.lang || 0);
    });

    // check username while-type
    $(document).off('input', '#add_n100_form input[name="NV106"]').on('input', '#add_n100_form input[name="NV106"]', function (e) {
      window.clearTimeout(self.checkNV106);
      self.checkNV106 = null;
      self.check_user_exist(this);
    });

    $(document).off('search', '#searchModal')
      .on('search', '#searchModal', function (e, input) {
        self.list_n100({ pvNV103: input.value });
      });
  };

  // fire after render n100 list;
  self.n100_eventListener = function () {

    $(document).off('click', '#table_n100 .faci-delete')
      .on('click', '#table_n100 .faci-delete', function () {
        var $tr = $(this).parents('tr'),
          pn1 = $tr.attr('lang'),
          emp_name = $tr.find('td[lang="HOTEN"]').text(),
          swal_title = lang['_confirm_delete_employee'].replace('%s', '\"' + emp_name + '\"');
        !!pn1 && swalComfirm(swal_title, '', function (ev) {
          ev.value && $.ajax({
            url: '/n100/new_storno_n100',
            dataType: 'JSON',
            type: 'POST',
            data: { PN100: pn1 },
            success: function (res) {
              if (res.status === 'success') {
                swalSuccess(lang['_update_success'], '', 4000, function () {
                  $tr.remove();
                })
              } else swalError(lang['_update_fail']);
            }
          })
        });
      })


    openDialog_cb('#table_n100 .faci-edit', '#dialog_add_personnel', '', function (_this) {
      var $tr = $(_this).parents('tr'),
        n100 = $tr.find('input[name="n100"]').val(),
        edit_data = JSON.parse(n100);
      if (edit_data && Object.keys(edit_data).length) {
        $('#add_n100_form :input').each(function (i, item) {
          var tag = $(item).prop('tagName'),
            type = tag === 'INPUT' ? $(item).attr('type') : tag.toLowerCase(),
            field_name = $(item).attr('name'),
            field_val = $(item).val() || '',
            data_val = edit_data[field_name] || '';
          type === 'text' ? $(item).val(field_name === 'ND118' ? moment(data_val).format('DD/MM/YYYY') : data_val)
            : type === 'radio' ? $(item).prop('checked', field_val === data_val)
              : $(item).find('option[value="' + data_val + '"]').prop('selected', type === 'select')
          field_name === 'NV106' && $(item).attr('readonly', true);
        });
        self.date_picker();
        add_n100_form.lang = $tr.attr('lang');
      }
    })

  };

  // ==============================================
  // ==============================================
  self.check_user_exist = function (_this) {
    var username = $(_this).val();
    self.checkNV106 = setTimeout(function () {
      $.ajax({
        url: '/n100/new_check_loginexist',
        dataType: 'JSON',
        type: 'POST',
        data: { NV106: username },
        success: function (res) {
          if (res.status === 'success') {
            $('[name="NV106"]').removeClass('error valid').addClass(+res.data > 0 ? 'error' : 'valid');
            $('#dialog_add_personnel .btn-save').attr('disabled', +res.data > 0);
          }
        }
      })
    }, 1000);
  }


  self.save_n100 = function (pn100) {
    var form_data = formObj2Json($('#add_n100_form [form="add_n100_form"]').serializeArray()),
      empty_field = search('', form_data),
      validNV106 = !!$('[name="NV106"].valid:not("error")').length;

    if (!!empty_field) { // check empty field
      var field_label = $('#add_n100_form :input[name="' + empty_field + '"]').parents('.row').find('label.text-right')
        .text().replace('*', '').trim();
      swalError(lang['_msg_not_enough'], lang['_enter_field'] + '\"' + field_label + '\"');
    } else if (!validNV106) { // check username exist
      swalError(lang['_invalid_username'], lang['_msg_invalid_username']);
    }
    else {
      $('.faci-loading').addClass('open');
      var edit_data = JSON.parse($('#table_n100 tr[lang="' + pn100 + '"] input[name="n100"]').val() || '{}'),
        form_keys = Object.keys(form_data), edit_keys = Object.keys(edit_data);
      for (var i in edit_keys) {
        var key = edit_keys[i];
        if (form_keys.indexOf(key) < 0) {
          form_data[key] = (key[0] === 'F' || key[1] === 'N' || key[1] === 'I') ? +edit_data[key] : edit_data[key];
        }
      }
      form_data.HOTEN = form_data.NV102 + ' ' + form_data.NV103;
      $.ajax({
        url: '/n100/new_insert_n100bs',
        dataType: 'JSON',
        type: 'POST',
        data: form_data,
        success: function (res) {
          $('.faci-loading').removeClass('open');
          if (res.status === 'success') {
            swalSuccess(lang['_update_success'], '', 4000, function () {
              $('#dialog_add_personnel .faci-close').trigger('click');
              if (!!pn100) { // edit
                $('#table_n100 tbody tr[lang="' + pn100 + '"] td').each(function (index, item) {
                  var field_name = $(item).attr('lang');
                  $(item).text(form_data[field_name]);
                });
                var form_str = JSON.stringify(form_data);
                $('#table_n100 tr[lang="' + pn100 + '"] input[name="n100"]').val(form_str);
              } else { // add-new                
                self.list_n100();
              }
            });
          } else {
            swalError(lang['_update_fail']);
            self.list_n100();
          }
        }
      })
    }
  };


  self.list_n100 = function (data) {
    data = data || {};
    var self = this,
      url = '/n100/new_list_oftabn100';
    url += Object.keys(data).length ? '?' + $.param(data) : ''
    $.ajax({
      url: url,
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        if (res.status === 'success') {
          $('#table_n100 tbody').html('');
          self.table_n100_tr(res.data);

          // remove "pnOFFSET=..." from url, adding later in $.fn.doPagination(), automaticly
          var pagi_url = url.replace(/pnOFFSET=[0-9]+/, ''),
            url_len = pagi_url.length,
            chr = pagi_url.indexOf('?') === url_len - 2 ? url_len - 1
              : pagi_url.indexOf('&') === url_len - 2 ? url_len - 1
                : pagi_url.indexOf('?&') === url_len - 3 ? url_len - 2 : url_len,
            final_url = pagi_url.substr(0, chr, pagi_url);
          if (final_url === '/n100/list_oftabn100') final_url = '/n100/list_oftabn100?pnLIMIT=' + self.pnLIMIT()
          res.data.length && $('.qb-pagination.image').doPagination(res.data[0].ROWSS, final_url, self.pnLIMIT(), function (pagi) {
            if (pagi.status === 'success') {
              self.table_n100_tr(pagi.data);
            }
          })
        }
      },
      complete: function (com) {
        self.n100_eventListener();
      }
    });

  };
  // ==============================================
  // ===============helper-level===================
  // ==============================================

  self.date_picker = function () {
    var maxDate = moment().subtract(18, 'year').format('DD/MM/YYYY'),
      dob_input = $('#add_n100_form input[name="ND118"]');
    dob_input.daterangepicker({
      locale: { format: 'DD-MM-YYYY' },
      "singleDatePicker": true,
      "showDropdowns": true,
      "parentEl": '#add_n100_form .form-group:has([name="ND118"])',
      "startDate": dob_input.val() || "01/01/1990",
      "minDate": "01/01/1900",
      "maxDate": maxDate,
      "opens": "center",
      function(start, end, label) {
      }
    });
  };

  self.option_list = function (edit_data) {
    $.ajax({
      url: '/comtab/list_option',
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        if (res.status === 'success') {
          var n85_arr = res.data,
            keys = Object.keys(n85_arr || {})
          for (var i in keys) {
            var field_name = keys[i], // also css-class name
              field = n85_arr[field_name],
              $select = $('#add_n100_form select.' + field_name).html('')
                .append($('<option>', { val: '', html: 'Choose...' }))
            for (var k in field) {
              $select.append($('<option>', { val: field[k].VAL, html: field[k].LABEL }));
            }
          }
        }
      }
    });
  };


}
var n100VM = new N100ViewModel();
ko.applyBindings(n100VM);
n100VM.init();