$(document).ready(function () {

  // Active Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Event Click Icon Add User Open Slide
  openPopupSlider('a.btn-add-user', '#popup_slide_group_person', 'active', '.content', 'active');

  // Event Click Item Group Permission
  openPopupSlider('li.item-group-permission', '#popup_slider_permission', 'active');

  // Active Tab Page Quan Tri He Thong
  $('.nav-tabs a[href="#personal_permission"]').tab('show');

  // Active Title Tab
  $(document).off('click', '.title-tab')
    .on('click', '.title-tab', function () {
      var id = $(this).attr('href');
      $('.tab-pane').removeClass('active');
      $(id).addClass('active');
      $('a.title-tab').removeClass('tab-active');
      $(this).addClass('tab-active');
    });

  // Active Title Collapse
  $(document).off('click', '.title-collapse')
    .on('click', '.title-collapse', function () {
      var aria_expanded = $(this).attr('aria-expanded');
      if (aria_expanded === "true") {
        $('.title-collapse').removeClass('active');
        $(this).addClass('active');
        $('span.ic-arrow-down').removeClass('rotate-arrow-up');
        $(this).parents().eq(1).removeClass('rm-border-bottom');
        $(this).find('span.ic-arrow-down').addClass('rotate-arrow-up');
      } else {
        $(this).parents().eq(1).addClass('rm-border-bottom');
        $(this).removeClass('active');
        $(this).find('span.ic-arrow-down').removeClass('rotate-arrow-up');
      }
    });

  // Active Content When Checkbox Checked
  $(document).off('click', 'input.cb-content-section')
    .on('click', 'input.cb-content-section', function () {
      if ($(this).is(':checked'))
        $(this).parents().eq(5).addClass('active');
      else
        $(this).parents().eq(5).removeClass('active');
    });

  // Select All Checkbox Permission
  $(document).off('click', 'input.cb-all')
    .on('click', 'input.cb-all', function () {
      if ($(this).is(':checked')) {
        $('input.cb-permission').each(function () {
          $(this).prop('checked', true);
        });
      } else {
        $('input.cb-permission').each(function () {
          $(this).prop('checked', false);
        });
      }
    });

  // Active Row When Cheked Checkbox
  $(document).off('click', 'input.cb-row')
    .on('click', 'input.cb-row', function () {
      if ($(this).is(':checked'))
        $(this).parents().eq(2).addClass('active');
      else
        $(this).parents().eq(2).removeClass('active');
    });

  // Active Popup Menu Data Root
  $(document).off('click', '#btn-data-root')
    .on('click', '#btn-data-root', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).addClass('active');
      $('.popup-menu-data-root ul.parent').removeClass('d-none');
      // Remove Active Menu Data Root
      $(document)
        .on("click", "body", function () {
          $('.btn-data-root').removeClass('active');
          $('.popup-menu-data-root ul.parent').addClass('d-none');
        });
    });

  openDialog('.forward', '#dialog_delivery_job'); // Event Click Icon Forward
  openDialog('.btn-report', '#dialog_report'); // Evetn Click Button Report
  openDialog('.link-report', '#dialog_history_report'); // Event Click Link-Report
  openDialog('.btn-ticket', '#dialog_repair'); // Event Click Button Ticket
  openPopupSlider('.list-materials', '#popup_slider_dialog_dsvt'); // Event Click Open Popup Danh Sach Vat Tu
  // /*N100<<=*/ openDialog('.btn-personnel', '#dialog_add_personnel'); // Event Click Button Add Personnel
  openPopupSlider('.require-materials', '#popup_slider_require_materials'); // Event Click Open Popup Yeu Cau Vat Tu
  openPopupSlider('.dialog-content-ycvt table tr td', '#popup_slider_ycvt_dsvt'); // Event Click Open Popup Yeu Cau Vat Tu Danh Sach Vat Tu
  // Event Click Open Popup Danh Sach Quyen Ca Nhan
  openPopupSlider('.item-list-name', '#popup_slide_list_person_permission', 'active');

  // Event Click Open Popup Chi Tiet Quyen Ca Nhan
  openPopupSlider('.list-person-permission-content ul li', '#popup_slide_detail_person_permission', 'active');

  // Event Click Item List Function
  openPopupSlider('span.title-lf', '#popup_slider_list_permission', 'active');

  // Event Click List Item Permission
  openDialog('.title-item-list-permission', '#update_permission', 'active');

  /* Event Click Item Group Personnel */
  // openPopupSlider('ul.list-group-personnel li span.title-item', '#popup_slider_user_group', 'active', 'ul.list-group-personnel', 'active');

  // Event Click Icon User Manage
  // openPopupSlider('a.ic-user', '#popup_slider_user_manager', 'active', 'ul.list-group-personnel', 'active');

  /* Event Click Icon User Manage Group */
  // openPopupSlider('a.ic-user-group', '#popup_slider_user_manager_group', 'active', 'ul.list-group-personnel', 'active');

  // openDialog('a.ic-edit', '#edit_user_mangager_group'); // Event Click Icon Edit User Manager Group      

  openDialog('a.btn-machine-device', '#add_machine_device'); // Event Click Button Add Machine Device

  openDialog('a.ic-file', '#dialog_document_attach'); // Event Click Icon File

  // Event Click Item Sort Table
  $(document).off('click', '.ic-sort')
    .on('click', '.ic-sort', function (e) {
      e.preventDefault();
      ($(this).hasClass('rotate-down')) ? $(this).removeClass('rotate-down') : $(this).addClass('rotate-down');
    });

  // Event Click Show Search Popup
  $(document).off('click', '#btn_search')
    .on('click', '#btn_search', function (e) {
      e.preventDefault();
      var self = $('.search-modal');
      (self.hasClass('show')) ? self.removeClass('show') : self.addClass('show');
      $(document).off('click', '#btn_close')
        .on('click', '#btn_close', function (e) {
          e.preventDefault();
          self.removeClass('show');
        });
    });

  // Event click chose time export excel
  $(document).off('click', '.pick-time-export')
    .on('click', '.pick-time-export', function (e) {
      e.preventDefault();
      var self = $('.time-export');
      (self.hasClass('d-none')) ? self.removeClass('d-none') : self.addClass('d-none');
      $(document)
        .on('click', function (event) {
          if (!$(event.target).closest(".pick-time-export").length)
            self.addClass('d-none');
        });
    });

  // Show Filter Table
  $(document).off('click', '.btn-filter')
    .on('click', '.btn-filter', function (e) {
      e.preventDefault();
      var self = $('.item-filter');
      (self.hasClass('d-none')) ? self.removeClass('d-none') : self.addClass('d-none');
      $(document)
        .on('click', function (event) {
          if (!$(event.target).closest(".btn-filter,.item-filter").length)
            self.addClass('d-none');
        });
    });

  tblRenderDefault();

  // Show | Hide Colums Table
  $(document).off('click', '.cb-table')
    .on('click', '.cb-table', function () {
      var arr = [], count = 0;
      ($(this).prop("checked")) ? $(this).val(1) : $(this).val(0);
      $('.cb-table').each(function () {
        arr.push(parseInt($(this).val()));
      });
      // if colums <= 10 not hide 
      $.each(arr, function (i, v) {
        if (v === 1)
          count++;
      });
      if (count >= 10)
        tblRender($('#pm_table'), arr);
    });

  // Slide up and down textarea when click icon arrow
  $(document).off('click', '.ic-right')
    .on('click', '.ic-right', function () {
      if ($(this).hasClass('rotate-down')) {
        $(this).removeClass('rotate-down');
        $(this).parent().next().slideUp();
      } else {
        $(this).addClass('rotate-down');
        $(this).parent().next().slideDown();
      }
    });

  // Change title nav
  $('.drop-menu li').each(function () {
    var href = $(this).find('a').attr('href');
    var url = window.location.href;
    var text = $(this).find('label').text().toUpperCase();
    var icon = $(this).find('i').attr('class').toString();
    var self = $('.icon-nav');
    if (href === url) {
      self.removeClass('faci-congviectrongyeu');
      self.addClass(icon);
      $('.drop-menu li').removeClass('active');
      $(this).addClass('active');
      $('span.title-nav').text(text);
    }
  });

  // enter to search for top-navbar
  $(document).off('keyup', '#searchModal .qb-input')
    .on('keyup', '#searchModal .qb-input', function (e) {
      if (e.type === 'keyup' && e.keyCode === 13) {
        $('#searchModal .qb-button').trigger('click');
      }
    });

  $(document).off('click', '#searchModal .qb-button')
    .on('click', '#searchModal .qb-button', function () {
      $('#searchModal').trigger('search', $('#searchModal .qb-input'))
    });

    var tree = [
      {
          text: "<span>DÂY CHUYỀN 1</span>",
          href: "#"
      },
      {
          text: "<span>DÂY CHUYỀN 2</sapn>",
          href:"#"
      },
      {
          text: "DÂY CHUYỀN 3",
          href:"#",
          nodes: [
              {
                  text: "VẬN CHUYỂN BAO XI MĂNG THÀNH PHẨM...",
                  href:"#",
                  nodes: [
                      {
                          text: "<span>VẬN CHUYỂN LIỆU VÀ ĐỊNH LƯỢNG</span>"
                      },
                      {
                          text: "VẬN CHUYỂN LIỆU VÀ ĐỊNH LƯỢNG 1",
                          href:"#",
                          nodes: [
                              {
                                  text: "VẬN CHUYỂN BAO XI MĂNG THÀNH PHẨM...",
                                  href:"#",
                                  nodes: [
                                      {
                                          text: "<span>VẬN CHUYỂN LIỆU VÀ ĐỊNH LƯỢNG</span>"
                                      },
                                      {
                                          text: "<span>VẬN CHUYỂN LIỆU VÀ ĐỊNH LƯỢNG 1</span>"
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          text: "XƯỞNG SCCK",
          href:"#",
          nodes:[
              {
                  text: "<span>VẬN CHUYỂN LIỆU VÀ ĐỊNH LƯỢNG</span>",
                  href:"#"
              },
              {
                  text: "<span>VẬN CHUYỂN LIỆU VÀ ĐỊNH LƯỢNG 1</span>",
                  href:"#"
              }
          ]
      },
      {
          text: "<span>CHI NHÁNH QUẢNG TRỊ<span>",
          href:"#"
      },
      {
          text: "<span>XƯỞNG KHAI THÁC<span>",
          href:"#"
      },
      {
          text: "<span>XI MĂNG MIỀN TRUNG</span>",
          href:"#"
      }];

      $('.tree').treeview({
          data: tree,
          expandIcon: "faci-arrow-right ic-arrow-menu",
          collapseIcon: "faci-arrow-down ic-arrow-menu",
          enableLinks: true,
          selectedColor: "#ffffff",
          selectedBackColor: "#0094fb",
      });


});
