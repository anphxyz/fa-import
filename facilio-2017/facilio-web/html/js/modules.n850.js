/**
 * @Author: hyn
 * @Create: 9/3/2017
 * @Module: n850
 */
var N850ViewModel = function () {
  var self = this;
  // LIST
  self.n850_arr = ko.observableArray();
  self.n900rl_group = ko.observableArray();
  self.n900rl_emp = ko.observableArray();
  self.n900_arr = ko.observableArray();
  self.com_n850_arr = ko.observableArray();

  // VAR
  self.pnLIMIT = ko.observable(10);

  self.init = function () {
    self.com_N850();
    self.lst_n850();
    self.evenListener();
  }


  self.evenListener = function () {

    $(document).off('search', '#searchModal')
      .on('search', '#searchModal', function (e, input) {
        
      });

    // enter to search n100 by last-name
    $(document).off('click', '#popup_slider_n900 .close-slide')
      .on('click', '#popup_slider_n900 .close-slide', function (e) {

      });

    // add new emp group
    openDialog_cb('.n850-wrapper .insert', '#edit_user_mangager_group', '', function (_this, ev) {
      ev.preventDefault();
      $('#add_emp_group').get(0).reset();
      add_emp_group.lang = 0;
    })

    // save edit/add new emp-group
    $(document).off('click', '#edit_user_mangager_group .btn-save')
      .on('click', '#edit_user_mangager_group .btn-save', function (e) {
        e.preventDefault();
        self.save_n850();
      })

    // left-popup search field
    $(document).off('input', '#popup_slider_n900 .input-search')
      .on('input', '#popup_slider_n900 .input-search', function (e) {
        var str = $(this).val().toLowerCase().trim()
        $(this).parents('.popup-slider').find('.popup-slider-small-body ul li').each(function (index, item) {
          var cont = $(this).children('span') || $(this),
            text = cont.text().toLowerCase().trim(),
            sum = 0;
          if (text.indexOf(str) > -1) { sum += 1 }
          if (!sum) $(this).addClass('hidden')
          else { $(this).removeClass('hidden') }
        })
      })
  };

  /**
   * FOR: icon in list N850
   * fire after render list N850
   */
  self.N850_evenListener = function () {

    openPopupSlider_startfnc('ul.list-group-personnel li .title-item', '#popup_slider_n900', 'active', 'ul.list-group-personnel', 'active', function (_this) {
      var fn850 = $(_this).parents('li').attr('lang');
      $('#popup_slider_n900 .popup-slider-small-top h3').text($(_this).text());
      popup_slider_n900.lang = fn850;
      self.list_n900({ pnNN104: 1, pnFN850: fn850 });
    });


    /* Event Click Icon User Manage */
    openPopupSlider_startfnc('#n850_arr a.ic-user', '#popup_slider_n900', 'active', 'ul.list-group-personnel', 'active', function (_this, ev) {
      var $li = $(_this).parents('li'),
        fn850 = $li.attr('lang');
      popup_slider_n900.lang = fn850;
      $('#popup_slider_n900 .popup-slider-small-top h3').text(lang['_managed_emp']);
      self.list_n900rl({ pvNV901: 'N', pnFN850: fn850 });
    });



    /* Event Click Icon User Manage Group */
    openPopupSlider_startfnc('#n850_arr a.ic-user-group', '#popup_slider_n900', 'active', 'ul.list-group-personnel', 'active', function (_this, ev) {
      var fn850 = $(_this).parents('li').attr('lang');
      popup_slider_n900.lang = fn850;
      $('#popup_slider_n900 .popup-slider-small-top h3').text(lang['_group_team']);
      self.list_n900rl({ pvNV901: 'Y', pnFN850: fn850 });
    });


    // Event Click Icon Edit User Manager Group      
    openDialog_cb('a.ic-edit', '#edit_user_mangager_group', '', function (_this, ev) {
      var $li = $(_this).parents('li'),
        n850 = JSON.parse($li.find('input[name=n850]').val() || '{}'),
        pn850 = $li.attr('lang');
      add_emp_group.lang = pn850;

      $('#add_emp_group :input').each(function (index, item) {
        var field_name = $(this).attr('name'),
          tag = $(item).prop('tagName'),
          data_val = n850[field_name],
          type = tag === 'INPUT' ? $(item).attr('type') : tag.toLowerCase();
        // prepare value for input:text | checkbox | radio;
        type === 'text' ? $(item).val(data_val)
          : type === 'select' ? $(item).find('option[value="' + data_val + '"]').prop('selected', true)
            : $(item).prop('checked', false && type === 'checkbox')
        $('[name="NV853"][value="' + data_val + '"]').prop('checked', true);
      });
    });

    $(document).off('click', '#n850_arr .ic-delete')
      .on('click', '.ic-delete', function (e) {
        e.preventDefault();
        self.storno_n850(this);
      });

    $(document).off('click', '#popup_slider_n900 ul li [type="checkbox"]')
      .on('click', '#popup_slider_n900 ul li [type="checkbox"]', function (e) {
        e.preventDefault();
        self.check_n900(this);
      });
  };


  self.lst_n850 = function () {
    $.ajax({
      url: '/n850/list_n850',
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        if (res.status === 'success') {
          $('.list-group-personnel').html('');
          self.n850_arr(res.data);
        }
      },
      complete: function () {
        self.N850_evenListener();
      }
    })
  };

  self.com_N850 = function () {
    $.ajax({
      url: '/comtab/com_N850',
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        if (res.status === 'success') {
          res.data.unshift({ VAL: 0, LABEL: 'Choose...' })
          self.com_n850_arr(res.data);
        }
      }
    })
  };

  self.list_n900 = function (data) {
    data = data || {}
    $('#popup_slider_n900 .user-loading').removeClass('hidden');
    var url = '/n900/list_n900'
    url += Object.keys(data).length ? '?' + $.param(data) : ''
    $.ajax({
      url: url,
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        $('#popup_slider_n900 .user-loading').addClass('hidden');
        if (res.status === 'success') {
          $('#n900').removeClass('hidden').siblings().addClass('hidden');
          self.n900_arr(res.data || []);
        } else { }
      }
    })
  };

  self.list_n900rl = function (data) {
    data = data || {}
    $('#popup_slider_n900 .user-loading').removeClass('hidden');
    var url = '/n900/list_n900rl';
    url += Object.keys(data).length ? '?' + $.param(data) : '';
    $.ajax({
      url: url,
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        if (res.status === 'success') {
          var n900r = res.data.n900r
            , n900l = res.data.n900l
            , short = n900r.length > n900l.length ? n900l : n900r
            , long = n900r.length > n900l.length ? n900r : n900l;
          $('#popup_slider_user_group .list-user-group ul').html('');
          for (var i = short.length - 1; i > -1; i--) {
            long.unshift(short[i]);
          }
          if (data.pvNV901 === 'Y') {
            $('#n900_group').removeClass('hidden').siblings().addClass('hidden');
            self.n900rl_group(long);
          } else {
            $('#n900_emp').removeClass('hidden').siblings().addClass('hidden');
            self.n900rl_emp(long);
          }
        }
      }
    })
  };

  self.check_n900 = function (_this) {
    var isChecked = $(_this).prop('checked')//true: add || false: remove                 
      , confirm_title = isChecked ? lang['_add_employee'] : lang['_delete_employee']
      , confirm_msg = isChecked ? lang['_confirm_add_employee'] : lang['_confirm_delete_employee']
      , confirm_btn = isChecked ? lang['_btn_add'] : lang['_btn_delete']
      , emp_name = $(_this).parents('li').children('span').text();

    swalComfirm(confirm_title, confirm_msg.replace('%s', emp_name), function (ans) {
      if (ans.value) {
        $(_this).prop('checked', isChecked);
        var $li = $(_this).parents('li')
          , pn100 = +$li.attr('lang')
          , form_data = JSON.parse($li.find('[name="n900"]').val() || '{}')
          , id = $(_this).parents('ul').attr('id')
          , fn850 = +popup_slider_n900.lang
          , url = isChecked ? '/n900/insert_n900' : '/n900/storno_n900';

        form_data['pvNV901'] = id === 'n900_emp' ? 'N' : id === 'n900_group' ? 'Y' : '';
        form_data['pvpnFN850'] = fn850;
        form_data['pnFN100'] = pn100;

        $.ajax({
          url: url,
          dataType: 'JSON',
          type: 'POST',
          data: form_data,
          success: function (res) {
            if (res.status === 'success' && res.data > 0) {
              swalSuccess(lang['_update_success'], '', 4000, function () {
              })
            } else {
              swalError(lang['_update_fail']);
              $(_this).prop('checked', !isChecked);
            }
          }
        })
      }
    }, confirm_btn);
  };


  self.save_n850 = function () {

    var pn850 = +add_emp_group.lang,
      form_data = formObj2Json($('#add_emp_group [form="add_emp_group"]').serializeArray()),
      empty_field = search(false, form_data);
    // serializeArray() not serialize non-check [type="checkbox"]
    form_data['NV854'] = $('#add_emp_group [name="pvNV854"]').prop('checked');

    if (!!empty_field) {
      var field_label = $('#add_emp_group :input[name="' + empty_field + '"]').parents('.form-group').find('label.text-right')
        .text().replace('*', '').trim();
      swalError(lang['_msg_not_enough'], lang['_enter_field'] + '\"' + field_label + '\"');
    } else {
      if (pn850) {
        var edit_data = JSON.parse($('ul.list-group-personnel li[lang="' + pn850 + '"] input[name="n850"]').val() || '{}'),
          form_keys = Object.keys(form_data),
          edit_keys = Object.keys(edit_data);
        for (var i in edit_keys) {
          var key = edit_keys[i];
          if (form_keys.indexOf(key) < 0) {
            form_data[key] = (key[0] === 'F' || key[1] === 'N' || key[1] === 'I') ? +edit_data[key] : edit_data[key];
          }
        }
        form_data['pnPN850'] = pn850;
      }
      $('.faci-loading').addClass('open');
      $.ajax({
        url: '/n850/insert_n850',
        dataType: 'JSON',
        type: 'POST',
        data: form_data,
        success: function (res) {
          $('.faci-loading').removeClass('open');
          if (res.status === 'success' && res.data > 0) {
            swalSuccess(lang['_update_success'], '', 4000, function () {
              $('#dialog_add_personnel .faci-close').trigger('click');
              if (!!pn850) { // edit
                var $li = $('ul.list-group-personnel li[lang="' + pn850 + '"]'),
                  form_str = JSON.stringify(form_data);
                $li.find('.title-item').text(form_data['pvNV852']);
                $li.find('input[name="n100"]').val(form_str);
              } else { // add-new
                self.lst_n850();
              }
              // close dialog
              $('.faci-close').trigger('click');
            });
          } else {
            swalError(lang['_update_fail']);
            self.lst_n850();
          }
        }
      })
    }
  };

  self.storno_n850 = function (_this) {
    var $li = $(_this).parents('li'),
      n850 = JSON.parse($li.children('[name="n850"]').val() || '{}'),
      group_name = $li.children('span').text(),
      msg_del = lang['_confirm_delete_empgroup'].replace('%s', group_name);
    // 
    swalComfirm(lang['_delete_empgroup'], msg_del, function (res) {
      if (!!res.value) {
        $('.faci-loading').addClass('open');
        // send req
        $.ajax({
          url: '/n850/storno_n850',
          dataType: 'JSON',
          type: 'POST',
          data: { PN850: +$li.attr('lang') },
          success: function (res) {
            $('.faci-loading').removeClass('open');
            if (res.status === 'success') {
              if (res.data > 0) {
                swalSuccess(lang['_delete_success'], '', 5000, function () { $li.remove(); })
              } else {
                swalError(lang['_delete_fail'])
                // location.reload();
              }
            }
          },
        });
      }
    }, lang['_delete']);
  };
}
var n850VM = new N850ViewModel();
ko.applyBindings(n850VM);
n850VM.init();