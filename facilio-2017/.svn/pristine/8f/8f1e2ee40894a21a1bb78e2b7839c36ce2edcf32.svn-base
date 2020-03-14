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
    $(document).on('click', '.title-tab', function () {
        var id = $(this).attr('href');
        $('.tab-pane').removeClass('active');
        $(id).addClass('active');
        $('a.title-tab').removeClass('tab-active');
        $(this).addClass('tab-active');
    });

    // Active Title Collapse
    $(document).on('click', '.title-collapse', function () {
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
    $(document).on('click', 'input.cb-content-section', function () {
        if ($(this).is(':checked')) {
            $(this).parents().eq(5).addClass('active');
        } else {
            $(this).parents().eq(5).removeClass('active');
        }
    });

    // Select All Checkbox Permission
    $(document).on('click', 'input.cb-all', function () {
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
    $(document).on('click', 'input.cb-row', function () {
        if ($(this).is(':checked')) {
            $(this).parents().eq(2).addClass('active');
        } else {
            $(this).parents().eq(2).removeClass('active');
        }
    });

    // Active Popup Menu Data Root
    $(document).on('click', '#btn-data-root', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('active');
        $('.popup-menu-data-root ul.parent').removeClass('d-none');
        // Remove Active Menu Data Root
        $(document).on("click", "body", function () {
            $('.btn-data-root').removeClass('active');
            $('.popup-menu-data-root ul.parent').addClass('d-none');
        });
    });

    // Event Click Icon Forward
    openDialog('.forward', '#dialog_delivery_job');

    // Evetn Click Button Report
    openDialog('.btn-report', '#dialog_report');

    // Event Click Link-Report
    openDialog('.link-report', '#dialog_history_report');

    // Event Click Button Ticket
    openDialog('.btn-ticket', '#dialog_repair');

    // Event Click Open Popup Yeu Cau Vat Tu
    openPopupSlider('.require-materials', '#popup_slider_require_materials');

    // Event Click Open Popup Yeu Cau Vat Tu Danh Sach Vat Tu
    openPopupSlider('.dialog-content-ycvt table tr td', '#popup_slider_ycvt_dsvt');

    // Event Click Open Popup Danh Sach Vat Tu
    openPopupSlider('.list-materials', '#popup_slider_dialog_dsvt');

    // Event Click Button Add Personnel
    openDialog('.btn-personnel', '#dialog_add_personnel');

    // Event Click Open Popup Danh Sach Quyen Ca Nhan
    openPopupSlider('.item-list-name', '#popup_slide_list_person_permission', 'active');

    // Event Click Open Popup Chi Tiet Quyen Ca Nhan
    openPopupSlider('.list-person-permission-content ul li', '#popup_slide_detail_person_permission', 'active');

    // Event Click Item List Function
    openPopupSlider('span.title-lf', '#popup_slider_list_permission', 'active');

    // Event Click List Item Permission
    openDialog('.title-item-list-permission', '#update_permission', 'active');

    /* Event Click Item Group Personnel */
    openPopupSlider('ul.list-group-personnel li span.title-item', '#popup_slider_user_group', 'active', 'ul.list-group-personnel', 'active');

    // Event Click Icon User Manage
    openPopupSlider('a.ic-user', '#popup_slider_user_manager', 'active', 'ul.list-group-personnel', 'active');

    /* Event Click Icon User Manage Group */
    openPopupSlider('a.ic-user-group', '#popup_slider_user_manager_group', 'active', 'ul.list-group-personnel', 'active');

    // Event Click Icon Edit User Manager Group
    openDialog('a.ic-edit','#edit_user_mangager_group');

    // Event Click Button Add Machine Device
    openDialog('a.btn-machine-device','#add_machine_device');

    // Event Click Icon File
    openDialog('a.ic-file','#dialog_document_attach');

    // Handle Event Click Item TreeView Tab Du Lieu Goc
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


    // $(document).on('click','a.item-sub-menu-data-root',function (e) {
    //     e.preventDefault();
    //     var href_child = $(this).attr('href');
    //     var title_child = $(this).text();
    //     var href_parent = $(this).parents('ul.sub-menu-data-root').prev().attr('href');
    //     var title_parent = $(this).parents('ul.sub-menu-data-root').prev().text();
    //     var name_child_menu = $('.name-child-menu');
    //     var name_parent_menu = $('.name-parent-menu');
    //     name_child_menu.text(title_child);
    //     name_child_menu.attr('href',href_child);
    //     name_parent_menu.text(title_parent);
    //     name_parent_menu.attr('href',href_parent);
    // });

    // Create Seekbar Complete
    new Seekbar.Seekbar({
        renderTo: ".seekbar-complete",
        thumbSize: 18,
        isActive: false,
        barSize: 4,
        negativeColor: '#09c199',
        positiveColor: '#ccc',
        thumbColor: '#09c199'
    });

});
