/**
 * @Author: hyn
 * @Create: 12/12/2017
 * @Module: s200
 */
var S200ViewModel = function () {
  var self = this;
  // LIST
  self.s200_arr = ko.observableArray();

  // VAR
  self.pnLIMIT = ko.observable(15);

  self.init = function () {
    self.eventListener();
    self.list_s200({
      SV202: '',
      SV217: 'BT',
      OFFSET: 1,
      LIMIT: self.pnLIMIT(),
      SORT: 1,
      DIRECTION: 0,
    });


  };
  // ==============================================
  // ==============EVENT LISTENER==================
  // ==============================================
  self.eventListener = function () {

    openDialog_cb('.s200-wrapper button.insert', '#dialog_insert_s200', '', function (_this, ev) {
      insert_s200.lang = 0
    })

    $(document).off('click', '#dialog_insert_s200 .btn-save').on('click', '#dialog_insert_s200 .btn-save', function (e) {
      self.insert_s200();
    })

    $(document).off('search', '#searchModal')
      .on('search', '#searchModal', function (e, input) {
      });
  };

  self.s200_eventListener = function () {
    $(document).off('click', '#s200_arr li .faci-delete').on('click', '#s200_arr li .faci-delete', function (e) {
      e.preventDefault();
      var id = $(this).parents('li').attr('lang');
      self.storno_s200(id);
    })

    openDialog_cb('.faci-edit', '#dialog_insert_s200', '', function (_this, ev) {
      var $li = $(_this).parents('li'),
        id = +$li.attr('lang'),
        s200 = JSON.parse($li.find('[name="s200"]').val() || '{}'),
        keys = Object.keys(s200);
      $('#insert_s200').attr('lang', id);
      $('#insert_s200 :input[form="insert_s200"]').each(function (index, item) {
        var field_name = $(this).attr('name'),
          json_val = s200[field_name];
        $(this).val(json_val || '');
      })
    })
    openDialog_cb('.faci-file', '#dialog_M650', '', function (_this, ev) {
      var $li = $(_this).parents('li'),
        id = +$li.attr('lang'),
        s200 = JSON.parse($li.find('[name="s200"]').val() || '{}');
      self.list_m650(0, '', 0, 0, 2, 'S200', 0, id);
      // FB050, FC150, FC300, FF000, MN654, MV656, MN657, MN658
    })
  };

  self.list_s200 = function (form) {
    form = form || {}
    var url = '/s200/new_list_s200ht';
    url += (Object.keys(form).length ? '?' + $.param(form) : '')
    // amper = arguments.length > 1 ? '&' : '';

    // url += arguments.length ? '?' : ''
    // url += !!SV202 ? 'SV202=' + SV202 : '';
    // url += !!SV217 ? (amper + 'SV217=' + SV217) : '';
    // url += !!OFFSET ? (amper + 'OFFSET=' + OFFSET) : '';
    // url += !!LIMIT ? (amper + 'LIMIT=' + LIMIT) : '';
    // url += !!SORT ? (amper + 'SORT=' + SORT) : '';
    // url += !!DIRECTION ? (amper + 'DIRECTION=' + DIRECTION) : '';
    $.ajax({
      type: 'GET',
      dataType: 'JSON',
      url: url,
      success: function (res) {
        if (res.status === 'success') {
          self.s200_arr(res.data);

          var pagi_url = url.replace(/OFFSET=[0-9]+/, ''),
            url_len = pagi_url.length,
            chr = pagi_url.indexOf('?') === url_len - 2 ? url_len - 1
              : pagi_url.indexOf('&') === url_len - 2 ? url_len - 1
                : pagi_url.indexOf('?&') === url_len - 3 ? url_len - 2 : url_len,
            final_url = pagi_url.substr(0, chr, pagi_url);
          if (final_url === '/s200/list_s200ht') final_url = '/s200/list_s200ht?LIMIT=' + self.pnLIMIT()
          console.log('pagination: ', final_url);
          res.data.length && $('.qb-pagination.image').doPagination(res.data[0].ROWSS, final_url, self.pnLIMIT(), function (pagi) {
            if (pagi.status === 'success') {
              self.s200_arr(pagi.data);
            }
          })
        }
      },
      complete: function (com) {
        self.s200_eventListener();
      }
    })
  };

  self.storno_s200 = function (ps200) {
    var sv201 = $('#s200_arr li[lang="' + ps200 + '"]>span').text(),
      comfirm = lang['_confirm_delete_machine'].replace('%s', sv201);
    swalComfirm(lang['_delete_machine'], comfirm, function (ans) {
      if (ans.value) {
        $('.faci-loading').addClass('open');
        $.ajax({
          url: '/s200/storno_s200',
          dataType: 'JSON',
          type: 'POST',
          data: { PS200: ps200 },
          success: function (res) {
            $('.faci-loading').removeClass('open');
            if (res.status === 'success' && res.data > 0) {
              swalSuccess(lang['_delete_success']);
              $('#s200_arr li[lang="' + ps200 + '"]').remove();
            } else {
              swalError(lang['_delete_fail']);
            }
          }
        });
      }
    }, lang['_deletes']);
  };

  self.insert_s200 = function () {
    var ps200 = +insert_s200.lang,
      $li = $('#s200_arr li:lang(' + ps200 + ')'),
      s200 = JSON.parse($li.find('[name="s200"]').val() || '{}'),
      form_data = formObj2Json($('#insert_s200 input[form="insert_s200"]').serializeArray()),
      empty_field = search('', form_data);
    if (empty_field) {
      var field_label = $('#insert_s200 :input[name="' + empty_field + '"]').parents('.form-group').find('label.text-right')
        .text().replace(/\s?\(?\*\)?/, '').trim();
      swalError(lang['_msg_not_enough'], lang['_enter_field'] + field_label);
    } else {
      if (ps200) {
        var form_keys = Object.keys(form_data),
          edit_keys = Object.keys(s200);
        for (var i in edit_keys) {
          var key = edit_keys[i];
          if (form_keys.indexOf(key) < 0) {
            form_data[key] = (key[0] === 'F' || key[1] === 'N' || key[1] === 'I') ? +s200[key] : s200[key];
          }
        }
        form_data['PS200'] = ps200;
      }
      console.log(form_data);
      true && $.ajax({
        url: '/s200/new_insert_s200',
        dataType: 'JSON',
        type: 'POST',
        data: form_data,
        success: function (res) {
          console.log(res);
          if (res.status === 'success' && res.data > 0) {
            swalSuccess(lang['_update_success'], '', 4000, function () {
              if (ps200) {
                $li.children('input[name="s200"]').val(JSON.stringify(form_data));
                $li.children('span').text(form_data.SV201);
              } else {
                self.list_s200();
              }

            });
            $('.faci-close').trigger('click');
          } else {
            swalError(lang['_update_failed']);
          }
        }
      })
    }

  };

  self.list_m650 = function (FB050, FC150, FC300, FF000, MN654, MV656, MN657, MN658) {
    var url = '/m650/list_m650',
      amper = arguments.length > 1 ? '&' : '';

    url += arguments.length ? '?' : '';
    url += !!FB050 ? 'FB050=' + FB050 : '';
    url += !!FC150 ? (amper + 'FC150=' + FC150) : '';
    url += !!FC300 ? (amper + 'FC300=' + FC300) : '';
    url += !!FF000 ? (amper + 'FF000=' + FF000) : '';
    url += !!MN654 ? (amper + 'MN654=' + MN654) : '';
    url += !!MV656 ? (amper + 'MV656=' + MV656) : '';
    url += !!MN657 ? (amper + 'MN657=' + MN657) : '';
    url += !!MN658 ? (amper + 'MN658=' + MN658) : '';
    $.ajax({
      url: url,
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        console.log(res);
      }
    })
  };
}
var s200VM = new S200ViewModel();
ko.applyBindings(s200VM);
s200VM.init();