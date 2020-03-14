/*
 * Author: Toailq
 * Create: 12/12/2017
 */

var C150CMModel = function () {
    /**--------- */
    var self = this;
    var str = 'ngaythuchien, thoigianhong, thoigiandk, tumaydung, toimaydung, tu_htdung, toi_htdung, bd_htdung, kt_htdung';
    var startDateReport = (new Date()).toISOString();
    var endDateReport = (new Date()).toISOString();
    var ngaythuchien = (new Date()).toISOString();
    var thoigianhong = (new Date()).toISOString();
    var thoigiandk = (new Date()).toISOString();
    var tumaydung = (new Date()).toISOString();
    var toimaydung = (new Date()).toISOString();
    var tu_htdung = (new Date()).toISOString();
    var toi_htdung = (new Date()).toISOString();
    var bd_htdung = (new Date()).toISOString();
    var kt_htdung = (new Date()).toISOString();
    var pnFC450 = 0;
    var pvCV154 = 'P';
    var pvCV151 = null;
    var plCB173 = null;
    var pvPC150 = null;//
    var pdCD152 = null; //tg phat sinh -> thoigianhong
    var pdCD153 = null;//dk hoan thanh -> thoigiandk + ngay thuc hien
    var pnCN176 = 0;//dk hoan thanh -> 15 phut
    var pnCn176int = 15;
    var pdCD155 = null;//tu may dung
    var pdCD156 = null;//toi may dung
    var pdCD159 = null;//tu he thong dung
    var pdCD160 = null;//toi he thong dung
    var ngaybatdau;//ngay bat dau
    var ngayketthuc;//ngay ket thuc
    var pvCV158 = 0;//ghi chu
    var pnPC300 = 0; //ma
    var pvCV165 = null;
    var pvCV166 = null
    var pnCN168 = 0;
    var pnCN169 = 0;
    var pnFC550 = 0;
    var pnFC150 = 0;

    self.total_row = ko.observable(0);
    self.get_link = ko.observable();
    self.valueSeekbar = ko.observable(0);
    self.pnSORT = ko.observable(1);
    self.pnLIMIT = ko.observable(10);
    self.pnDIRECTION = ko.observable(0);
    self.pnFN850 = ko.observable();//ma phong ban
    self.pvUSER = ko.observable();//ma nhan vien
    self.pnFC500 = ko.observable();//ma trang thai
    self.mota = ko.observable();//mo ta
    radioRepairC150CM = ko.observable("1");
    self.pnBN404 = ko.observable();
    self.textTabN850 = ko.observable();
    self.textTabN100G = ko.observable();
    self.textCombC150K = ko.observable();
    self.titleReadMore = ko.observable();
    self.textReadMore = ko.observable();

    self.listCombTabC150K = ko.observableArray([]);//list sua chua lon
    self.listOfTabC150C = ko.observableArray([]);//list bao tri sua chua
    self.listOfTabC300CP5 = ko.observableArray([]);//list lich su bao cao
    self.listCombTabB050E = ko.observableArray([]);//list may trong cong viec sua chua
    self.listCombTabB050ESearch = ko.observableArray([]);//list may trong cong viec sua chua
    self.listCombTabS250B = ko.observableArray([]);//list bo phan trong cong viec sua chua
    self.listOfTabC650RPV = ko.observableArray([]);//list nhan vien cua phieu duoc giao cong viec
    self.listOfTabC650LP10 = ko.observableArray([]);//list nhan vien cua phieu giao cong viec
    self.listCombTabN850 = ko.observableArray([]);//list phong ban
    self.listCombTabN100G = ko.observableArray([]);//list nhan vien
    self.listN100 = ko.observableArray([]);//list nhan vien cong viec sua chua
    self.listImage = ko.observableArray([]);//list image c150
    self.listFile = ko.observableArray([]);//list file c150
    self.listExportExcel = ko.observableArray([]);//list export excel
    /** ----------- */

    /** -----comb---- */
    self.combStatusComplete = ko.observableArray([
        { VAL: 0, LABEL: lang['_comb_status_complete'][0] },
        { VAL: 1, LABEL: lang['_comb_status_complete'][1] },
        { VAL: 2, LABEL: lang['_comb_status_complete'][2] },
        { VAL: 10, LABEL: lang['_comb_status_complete'][3] }
    ]);
    self.textStatus = ko.observable(limitStr(self.combStatusComplete()[0].LABEL));
    self.combRange = ko.observableArray([
        { VAL: 'M', LABEL: lang['_comb_range'][0] },
        { VAL: 'E', LABEL: lang['_comb_range'][1] },
        { VAL: 'N', LABEL: lang['_comb_range'][2] },
    ]);
    self.textRange = ko.observable(limitStr(self.combRange()[0].LABEL));
    self.combSort = ko.observableArray([
        { VAL: '1', LABEL: lang['_comb_sort'][0] },
        { VAL: '2', LABEL: lang['_comb_sort'][1] },
        { VAL: '3', LABEL: lang['_comb_sort'][2] },
    ]);
    self.textSort = ko.observable(self.combSort()[0].LABEL);
    self.combtgdk = ko.observableArray([
        { VAL: 15, LABEL: lang['_comb_intend_time'][0] },
        { VAL: 30, LABEL: lang['_comb_intend_time'][1] },
        { VAL: 45, LABEL: lang['_comb_intend_time'][2] },
        { VAL: 60, LABEL: lang['_comb_intend_time'][3] },
        { VAL: 120, LABEL: lang['_comb_intend_time'][4] },
        { VAL: 180, LABEL: lang['_comb_intend_time'][5] },
        { VAL: 240, LABEL: lang['_comb_intend_time'][6] },
        { VAL: 300, LABEL: lang['_comb_intend_time'][7] },
        { VAL: 360, LABEL: lang['_comb_intend_time'][8] },
        { VAL: 420, LABEL: lang['_comb_intend_time'][9] },
        { VAL: 1440, LABEL: lang['_comb_intend_time'][10] },
        { VAL: 2880, LABEL: lang['_comb_intend_time'][11] }
    ]);
    self.textCombtgdk = ko.observable(limitStr(self.combtgdk()[0].LABEL));
    /**----end comb--- */

    //even click date
    $('#daterangereport').on('apply.daterangepicker', function (ev, picker) {
        startDateReport = picker.startDate.format('MM-DD-YYYY h:mm');
        endDateReport = picker.endDate.format('MM-DD-YYYY h:mm');
    });

    // Event Click Icon Update Time
    openDialog('a.edt-expected', '#dl_update_time');
    openDialog('.btn-ticket-edit', '#dialog_repair');
    openDialog('.read-more', '#dl_read_more');

    // Event Click Icon File
    openDialog('a.ic-file', '#dialog_document_attach');
    openDialog('a.ic-image', '#dialog_pic_attach');
    $('#sb_complete_work').createRange({
        showValTo: '#sb_complete_val'
    });

    /**-----------init data------------- */
    //load list phong ban
    self.loadListCombTabN850 = function () {
        $.ajax({
            type: "GET",
            url: "/c150CM/comb_tabn850",
            dataType: "json",
            success: function (res) {
                if (res.status === "success") {
                    self.listCombTabN850(res.data);
                    if (!localStorage.getItem('pnFN850')) {
                        self.textTabN850(limitStr(res.data[0].LABEL));
                    }
                }
            }
        });
    };
    //load list nhan vien
    self.loadListCombTabN100G = function () {
        !!self.pnFN850() ? self.pnFN850() : self.pnFN850(98);
        $.ajax({
            type: "GET",
            url: "/c150CM/comb_tabn100g?pnFN850=" + self.pnFN850(),
            dataType: "json",
            success: function (res) {
                if (res.status === "success") {
                    self.listN100(res.data);
                    res.data.unshift({ VAL: "ALL", LABEL: lang['_all'] });
                    self.listCombTabN100G(res.data);
                    if (!localStorage.getItem('pvUSER')) {
                        self.textTabN100G(limitStr(res.data[0].LABEL));
                    }
                }
            }
        });
    };
    //load trang thai luc cuoi cung
    self.loadLocalStorage = function () {
        if (localStorage.getItem('cvcanhan') === 'true') {
            cvcanhan(true);
            bigRepair(false);
            pvCV154 = 'P';
        } else {
            cvcanhan(false);
        }
        if (localStorage.getItem('bigRepair') === 'true') {
            $(".box-checkbox-rp").removeClass("hidden-big-repair");
            cvcanhan(false);
            bigRepair(true);
            pvCV154 = 'K';
            self.loadListCombTabC150K();
            self.textCombC150K((localStorage.getItem('textCombC150K')));
            pdCD153 = localStorage.getItem('pdCD153');
        } else {
            $(".box-checkbox-rp").addClass("hidden-big-repair");
            bigRepair(false);
            pvCV154 = 'P';
        }
    }
    /**-----------end init data------------- */

    /**---checked------ */
    checkEndC150CM = ko.observable(false);// check ket thuc trong cong viec sua chua
    //checked cong viec ca nhan
    cvcanhan = ko.observable(false);//check cong viec ca nha
    cvcanhan.subscribe(function () {
        if (cvcanhan() == true) {
            bigRepair(false);
            pvCV154 = 'P';
        }
        localStorage.setItem('cvcanhan', cvcanhan());
        localStorage.setItem('bigRepair', bigRepair());
        localStorage.setItem('pvCV154', pvCV154);
        self.loadListOfTabC150C();
    });
    //checked sua chua lon
    bigRepair = ko.observable(false);//check sua chua lon
    bigRepair.subscribe(function () {
        if (bigRepair() == true) {
            $(".box-checkbox-rp").removeClass("hidden-big-repair");
            pvCV154 = 'K';
            cvcanhan(false);
            self.loadListCombTabC150K();
        } else {
            $(".box-checkbox-rp").addClass("hidden-big-repair");
            pvCV154 = 'P';
            self.textCombC150K('');
            self.loadListOfTabC150C();
        }
        localStorage.setItem('cvcanhan', cvcanhan());
        localStorage.setItem('bigRepair', bigRepair());
        localStorage.setItem('pvCV154', pvCV154);
    });
    //check sua chua lon
    checkBigRepair = ko.observable(false);//check sua chua lon trong cong viec sua chua
    checkBigRepair.subscribe(function () {
        if (checkBigRepair() == true) {
            pdCD152 = null;
            pdCD153 = (new Date(ngaythuchien)).toISOString();
            pnCN176 = pnCn176int;
        } else {
            pdCD152 = (new Date(thoigianhong)).toISOString();
            pdCD153 = (new Date(thoigiandk)).toISOString();
            pnCN176 = 0;
        }
    })
    //check may dung
    maydung = ko.observable(false);//check may dung
    maydung.subscribe(function () {
        if (maydung() == true) {
            pdCD155 = (new Date(tumaydung)).toISOString();
            pdCD156 = (new Date(toimaydung)).toISOString();
        } else {
            htdung(false);
            pdCD155 = null;
            pdCD156 = null;
            pdCD159 = null;
            pdCD160 = null;
        }
    });
    //check he thong dung
    htdung = ko.observable(false);//check he thong dung
    htdung.subscribe(function () {
        if (htdung() == true) {
            pdCD159 = (new Date(tu_htdung)).toISOString();
            pdCD160 = (new Date(toi_htdung)).toISOString();
        } else {
            pdCD159 = null;
            pdCD160 = null;
        }
    });
    /** ----end checked--- */

    /** ------reset and set form---- */
    //reset form cong viec sua chua
    resetFormRepait = function () {
        $("#select_may").removeAttr("disabled");
        $("#select_bophan").removeAttr("disabled");
        pvPC150 = null;
        pnFH150 = 0;
        pnFN600 = 0;
        pvCV151 = null;
        pnFS200 = 0;
        plCB173 = null;
        pvCV154 = "P";
        pnCN168 = 0;
        pnCN169 = 0;
        pdCD152 = null;
        pdCD153 = null;
        pvCV165 = null;
        pdCD155 = null;
        pdCD156 = null;
        pdCD159 = null;
        pdCD160 = null;
        pnFC450 = 1;
        pvCV158 = null;

        startDateReport = (new Date()).toISOString();
        endDateReport = (new Date()).toISOString();
        ngaythuchien = (new Date()).toISOString();
        thoigianhong = (new Date()).toISOString();
        thoigiandk = (new Date()).toISOString();
        tumaydung = (new Date()).toISOString();
        toimaydung = (new Date()).toISOString();
        tu_htdung = (new Date()).toISOString();
        toi_htdung = (new Date()).toISOString();
        bd_htdung = (new Date()).toISOString();
        kt_htdung = (new Date()).toISOString();
        var pnCn176int = 15;
        self.textCombtgdk(lang['_comb_intend_time'][0]);
        $("#pvCV151").val('');
        $("#plCB173").val('');
        $("#select_bophan").text('');
        self.textRange('');
        $("#select_may").val('');
        $("#nhanvien").text('');
        checkBigRepair(false);
        checkEndC150CM(false);
        maydung(false);
        htdung(false);
        radioRepairC150CM("1");
    }
    //set form cong viec sua chua
    setFormRepait = function (data) {
        $("#select_may").attr("disabled", "disabled");
        $("#select_bophan").attr("disabled", "disabled");
        pvPC150 = data.PC150;//ma: CMKL-0004428
        pnFH150 = data.FH150;//null
        pnFN600 = data.pnFN600;//ma: 4428
        pvCV151 = data.CV151;//Tieu de: toai test 2
        pnFS200 = data.Fs200;//ma: 26548
        plCB173 = data.CB170;//mo ta: undefined
        pvCV154 = data.CV154;//sua chua lon: P
        pnCN168 = data.CN168;//ma: 5545
        pnCN169 = data.CN169;//0
        pdCD152 = data.CD152;//2017-12-13T23:00:00.000Z
        pdCD153 = data.CD153;//2017-12-13T23:00:00.000Z
        pvCV165 = data.CV165;//Ten nhan vien: Le Hong Son
        pdCD155 = data.CD155;//null
        pdCD156 = data.CD156;//null
        pdCD159 = data.CD159;//null
        pdCD160 = data.CD160;//null
        pnFC450 = data.FC450;//1
        pvCV158 = data.CV158;//null

        $("#ngaythuchien").val(convertDate(data.CD153));
        $("#thoigianhong").val(convertDate(data.CD152));
        $("#thoigiandk").val(convertDate(data.CD153));
        $("#tumaydung").val(convertDate(data.CD155));
        $("#toimaydung").val(convertDate(data.CD156));
        $("#tu_htdung").val(convertDate(data.CD159));
        $("#toi_htdung").val(convertDate(data.CD160));
        var pnCn176int = 15;
        self.textCombtgdk(lang['_comb_intend_time'][0]);
        $("#pvCV151").val(data.CV151);
        $("#plCB173").val(data.CB173);
        $("#select_bophan").text(limitBoxInput(data.SV251));
        if (data.FC550 == 'M') {
            self.textRange(limitStr(self.combRange()[0].LABEL));
        } else if (data.FC550 == 'E') {
            self.textRange(limitStr(self.combRange()[1].LABEL));
        } else {
            self.textRange(limitStr(self.combRange()[2].LABEL));
        }
        $("#select_may").val(limitBoxInput(data.SV201));
        $("#nhanvien").text(limitBoxInput(data.CV165));
        if (data.CV154 === 'P') {
            checkBigRepair(false);
        } else {
            checkBigRepair(true);
        }
        checkEndC150CM(false);
        maydung(false);
        htdung(false);
        if (data.FC450 === '1') {
            radioRepairC150CM('1');
        } else if (data.FC450 === '2') {
            radioRepairC150CM('2');
        } else {
            radioRepairC150CM('3');
        }

    }
    resetFormReport = function () {
        pnPC300 = 0;
        $("#describeReport").val('');
        self.valueSeekbar(0);
        $('#sb_complete_work').setValRange(0)
        $("#daterangereport").val(formatTime((new Date()).toISOString()) + " - " + formatTime((new Date()).toISOString()));
    }
    setFormReport = function (data) {
        pnPC300 = data.PC300;
        $("#describeReport").val(data.CB317);
        $('#sb_complete_work').setValRange(data.CN315)
        self.valueSeekbar(data.CN315)
        $("#daterangereport").val(formatTime(data.CD301) + " - " + formatTime(data.CD302));
    }
    /** -----end reset and set form----- */

    //load list sua chua lon
    self.loadListCombTabC150K = function () {
        showLoading();
        $.ajax({
            type: "GET",
            url: "/c150CM/comb_tabc150k",
            dataType: "json",
            success: function (res) {
                if (res.status === "success") {
                    self.listCombTabC150K(res.data);
                    if (!!localStorage.getItem('textCombC150K')) {
                        self.textCombC150K(limitStr(formatTime(res.data[0].LABEL)));
                        pdCD153 = (new Date(res.data[0].VAL)).toISOString();
                    } else {
                        self.textCombC150K(localStorage.getItem('textCombC150K'));
                        pdCD153 = localStorage.getItem('pdCD153');
                    }
                    self.loadListOfTabC150C();
                } else {
                    self.textCombC150K(limitStr('chưa có sửa chữa lớn'));
                }
                hideLoading();
            }
        });
    };
    //chon sua chua lon
    clickCombTabC150K = function (val, label) {
        self.textCombC150K(limitStr(formatTime(label)));
        pdCD153 = (new Date(val)).toISOString();
        localStorage.setItem('textCombC150K', self.textCombC150K());
        localStorage.setItem('pdCD153', pdCD153);
        self.loadListOfTabC150C();
    }

    //load list c150c
    self.loadListOfTabC150C = function (VAL_FN850, TEXT_FN850, VAL_USER, TEXT_USER, VAL_STATUS, TEXT_STATUS, VAL_SORT, TEXT_SORT, OFFSET, LIMIT) {
        var url;
        // console.log('-> VAL_FN850: ' + VAL_FN850 + ' - ' + VAL_FN850);
        if (!!VAL_FN850) {
            self.pnFN850(VAL_FN850);
            self.textTabN850(limitStr(TEXT_FN850));
            self.pvUSER('ALL');
            self.loadListCombTabN100G();
            localStorage.setItem('pvUSER', self.pvUSER());
            localStorage.setItem('textTabN100G', 'Tất cả');
            localStorage.setItem('pnFN850', self.pnFN850());
            localStorage.setItem('textTabN850', self.textTabN850());
        } else if (!!localStorage.getItem('pnFN850')) {
            self.pnFN850(localStorage.getItem('pnFN850'));
            self.textTabN850(limitStr(localStorage.getItem('textTabN850')));
        }
        if (!!VAL_USER) {
            self.pvUSER(VAL_USER);
            self.textTabN100G(limitStr(TEXT_USER));
            localStorage.setItem('pvUSER', self.pvUSER());
            localStorage.setItem('textTabN100G', self.textTabN100G());
        } else if (!!localStorage.getItem('pvUSER')) {
            self.pvUSER(localStorage.getItem('pvUSER'));
            self.textTabN100G(limitStr(localStorage.getItem('textTabN100G')));
        }
        if (!!VAL_STATUS) {
            self.pnFC500(VAL_STATUS);
            self.textStatus(limitStr(TEXT_STATUS));
            localStorage.setItem('pnFC500', self.pnFC500());
            localStorage.setItem('textStatus', self.textStatus());
        } else if (!!localStorage.getItem('pnFC500')) {
            self.pnFC500(localStorage.getItem('pnFC500'));
            self.textStatus(limitStr(localStorage.getItem('textStatus')));
        }
        if (!!VAL_SORT) {
            self.pnSORT(VAL_SORT);
            self.textSort(TEXT_SORT);
            if (VAL_SORT === localStorage.getItem('pnSORT')) {
                (self.pnDIRECTION() == 1) ? self.pnDIRECTION(0) : self.pnDIRECTION(1);
            }
            localStorage.setItem('pnSORT', self.pnSORT());
            localStorage.setItem('textSort', self.textSort());
        } else if (!!localStorage.getItem('pnSORT')) {
            self.pnSORT(localStorage.getItem('pnSORT'));
            self.textSort(localStorage.getItem('textSort'));
        }

        self.listExportExcel([]);
        !!self.pnFN850() ? self.pnFN850() : self.pnFN850(98);
        !!self.pvUSER() ? self.pvUSER() : self.pvUSER('ALL');
        !!self.pnFC500() ? self.pnFC500() : self.pnFC500(0);
        !!self.pnSORT() ? self.pnSORT() : self.pnSORT(1);
        if (cvcanhan() == true) {
            url = "/c150CM/list_oftabc150per?pnFC500=" + self.pnFC500() + "&pnLIMIT=" + self.pnLIMIT() + "&pnSORT=" + self.pnSORT() + "&pnDIRECTION=" + self.pnDIRECTION();
            self.get_link(url);
        } else {
            if (pvCV154 == 'K') {
                url = "/c150CM/list_oftabc150c?pnFN850=" + self.pnFN850() + "&pnSORT=" + self.pnSORT()
                    + "&pvUSER=" + self.pvUSER() + "&pnFC500=" + self.pnFC500() + "&pvCV154=" + pvCV154
                    + "&pdCD153=" + pdCD153 + "&pnLIMIT=" + self.pnLIMIT() + "&pnDIRECTION=" + self.pnDIRECTION();
                self.get_link(url);
            } else {
                url = "/c150CM/list_oftabc150c?pnFN850=" + self.pnFN850() + "&pnSORT=" + self.pnSORT() + "&pnLIMIT=" + self.pnLIMIT()
                    + "&pvUSER=" + self.pvUSER() + "&pnFC500=" + self.pnFC500() + "&pvCV154=" + pvCV154 + "&pnDIRECTION=" + self.pnDIRECTION();
                self.get_link(url);
            }
        }
        showLoading();
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (res) {
                console.log('-------');
                console.log(res);
                if (res.status === "success") {
                    self.listOfTabC150C(res.data);
                    self.total_row(res.data.length);
                    // self.total_row(res.data[0].ROWSS);
                } else {
                    self.listOfTabC150C(null);
                    self.total_row(0);
                }
                $('.qb-pagination.image').doPagination(self.total_row(), self.get_link(), self.pnLIMIT(), setListOfTabC150C);
                hideLoading();
            }
        });

    };
    setListOfTabC150C = function (res) {
        self.listOfTabC150C(res.data);
    }

    // search may trong ticket
    self.search_may = ko.observable('');
    self.listCombTabB050ESearch = ko.computed(function () {
        var text = self.search_may();
        var q = change_alias(text);
        return self.listCombTabB050E().filter(function (i) {
            return i.TEXT.toLowerCase().indexOf(change_alias(q)) >= 0;
        });
    });

    /** -----------report-------------- */
    //click button bao cao
    openReportC150CM = function (value) {
        resetFormReport();
        pvPC150 = value;
    };
    //luu bao cao
    insertTabC300 = function () {
        var fc500int = 1;// pnFC500
        if ((self.valueSeekbar() < 100) && (self.valueSeekbar() > 1)) {
            fc500int = 2;
        } else if (self.valueSeekbar() == 100) {
            fc500int = 10;
        }
        showLoading();
        $.ajax({
            type: "POST",
            url: "/c150CM/insert_tabc300",
            data: {
                pvFC600: pvPC150, pnPC300: pnPC300, pnFC500: fc500int, pdCD301: (new Date(startDateReport)).toISOString(),
                pdCD302: (new Date(endDateReport)).toISOString(), pvCV314: pvPC150, pnCN315: self.valueSeekbar(),
                plCB317: $("#describeReport").val()
            },
            dataType: "json",
        }).done(function (result) {
            closeDialog('#dialog_report');
            closeDialog('#dialog_history_report');
            hideLoading();
            if (result.status === "success") {
                swalSuccess(undefined, res.message);
                // swalSuccess(lang['_msg_success'], lang['_msg_success_report']);
                if (fc500int == 10) {
                    self.loadListCombTabC150K();
                }
            } else {
                // swalError(lang['_msg_fail'], lang['_msg_fail_report']);
                swalError(undefined, res.message);
            }
        });
    };
    // load danh sach bao cao
    loadListOfTabC300CP5 = function (FC600) {
        pvPC150 = FC600;
        showLoading();
        $.ajax({
            type: "GET",
            url: "/c150CM/list_oftabc300c_p5?pnFC600=" + FC600,
            dataType: "json",
            success: function (res) {
                console.log(res);
                if (res.status === "success") {
                    self.listOfTabC300CP5(res.data);
                } else {
                    self.listOfTabC300CP5(null);
                }
                hideLoading();
            }
        });
    };
    //xoa bao cao
    deleteReport = function (data) {
        swalComfirm(lang['_confirm'], lang['_confirm_delete_report'], function (res) {
            if (res.value) {
                showLoading();
                $.ajax({
                    type: "POST",
                    url: "/c150CM/storno_tabc300",
                    data: { pnFC600: data.FC600, pnPC300: data.PC300, pvCV314: data.FC600 },
                    dataType: "json",
                }).done(function (result) {
                    hideLoading();
                    if (result.status === "success") {
                        // swalSuccess(lang['_msg_success'], lang['_Confirm_password_fail']);
                        swalSuccess(undefined, res.message);
                        self.listOfTabC300CP5.remove(data);
                    } else {
                        // swalError(lang['_msg_fail'], lang['_msg_delete_fail']);
                        swalError(undefined, res.message);
                    }
                });
            }
        });
    }
    /**------------end report------------- */

    //mo sua chua ticket, reset du lieu trong form
    openEditTicket = function (data) {
        setFormRepait(data);
    }
    //click button ticket
    openRepairC150CM = function () {
        showLoading();
        !!self.pnFN850() ? self.pnFN850() : self.pnFN850(98);
        resetFormRepait();
        //load danh sách máy
        $.ajax({
            type: "GET",
            url: "/c150CM/comb_tabb050e?pnFN850=" + self.pnFN850(),
            dataType: "json",
            success: function (res) {
                console.log(res);
                if (res.status === "success") {
                    var data = [];
                    var length = res.data.length;
                    for (i = 0; i < length; i++) {
                        data.push({ VAL: res.data[i].VAL, LABEL: res.data[i].LABEL, TEXT: change_alias(res.data[i].LABEL) })
                    }
                    self.listCombTabB050E(data);
                } else {
                    self.listCombTabB050E(null);
                }
                hideLoading();
            }
        });
    };
    // chon may
    loadCombTabS250B = function (value, label) {
        showLoading();
        $("#select_may").val(limitBoxInput(label));
        pnCN168 = value;
        $.ajax({
            type: "GET",
            url: "/c150CM/comb_tabs250b?pnFB050=" + value,
            dataType: "json",
            success: function (res) {
                if (res.status === "success") {
                    self.listCombTabS250B(res.data);
                } else {
                    self.listCombTabS250B(null);
                }
                hideLoading();
            }
        });
    }
    //chon loai may trong ticker
    clickSelectRange = function (value, label) {
        self.textRange(limitBoxInput(label));
        pnFC550 = value;
    }
    // chon bo phan
    clickCombTabS250B = function (value, label) {
        $("#select_bophan").text(limitBoxInput(label));
        pnCN169 = value;
    }
    //chon thoi gian du kien
    clickSelectTgdk = function (val, label) {
        self.textCombtgdk(limitBoxInput(label));
        pnCn176int = parseInt(val);
    }
    //chon nhan vien thuc hien
    clickN100 = function (val, label) {
        $("#nhanvien").text(limitBoxInput(label));
        pvCV165 = val;
    }
    //click luu cong viec sua chua
    saveRepairC150CM = function () {
        checkDate(bd_htdung, kt_htdung, lang['_msg_day_start_more_day_end']);
        insertTabC150();
        if (checkEndC150CM() == true) {
            self.valueSeekbar(100);
            insertTabC300();
        }
    };
    insertTabC150 = function () {
        pnFC450 = radioRepairC150CM();
        pvCV154 = 'P';
        pvCV151 = $("#pvCV151").val();
        plCB173 = $("#plCB173").val();
        pvCV166 = "Y";
        if (maydung() == true) {
            checkDate(tumaydung, toimaydung, lang['_msg_maydung_day_from_more_day_to']);
            pdCD155 = (new Date(tumaydung)).toISOString();
            pdCD156 = (new Date(toimaydung)).toISOString();
        } else {
            pdCD155 = null;
            pdCD156 = null;
        }
        if (htdung() == true) {
            checkDate(tu_htdung, toi_htdung, lang['_msg_htdung_day_from_more_day_to']);
            pdCD159 = (new Date(tu_htdung)).toISOString();
            pdCD160 = (new Date(toi_htdung)).toISOString();
        } else {
            pdCD159 = null;
            pdCD160 = null;
        }
        if (checkBigRepair() == true) {
            self.pnFC500(10);
            pvCV154 = 'K';
            checkDate(ngaythuchien, ngaythuchien, lang['_msg_day_tgps_more_day_nth']);
            pnCN176 = pnCn176int;
            pdCD152 = null;
            pdCD153 = (new Date(ngaythuchien)).toISOString();
        } else {
            self.pnFC500(1);
            pvCV154 = 'p';
            checkDate(thoigianhong, thoigiandk, lang['_msg_day_tgps_more_day_dkht'], true);
            pnCN176 = null;
            pdCD152 = (new Date(thoigianhong)).toISOString();
            pdCD153 = (new Date(thoigiandk)).toISOString();
        }
        // if ((pvCV151 == null) || (pvCV151 == '') || (pnCN168 == 0) || (pnFC550 == null) || (pnFC550 == '')
        // 	|| (pvCV165 == null) || (pvCV165 == '')) {
        if ((!!pvCV151) || (pnCN168 == 0) || (!!pnFC550) || (!!pvCV165)) {
            // return swalError(lang['_msg_error'], lang['_msg_not_enough']);
            swalError(undefined, res.message);
        }
        showLoading();
        $.ajax({
            type: "POST",
            url: "/c150CM/insert_tabc150",
            data: {
                pvPC150: pvPC150, pnFC450: pnFC450, pnFC550: pnFC550, pnFC500: self.pnFC500(),
                pvCV151: pvCV151, pdCD152: pdCD152, pdCD153: pdCD153, pvCV154: pvCV154, pdCD155: pdCD155,
                pdCD156: pdCD156, pdCD159: pdCD159, pdCD160: pdCD160, pvCV165: pvCV165, pvCV166: pvCV166,
                pnCN168: pnCN168, pnCN169: pnCN169, plCB173: plCB173
            },
            dataType: "json",
        }).done(function (result) {
            closeDialog('#dialog_repair');
            hideLoading();
            if (result.status === "success") {
                // swalSuccess(lang['_msg_success'], lang['_msg_insert_c150_success']);
                swalSuccess(undefined, res.message);
            } else {
                // swalError(lang['_msg_fail'], lang['_msg_insert_c150_fail']);
                swalError(undefined, res.message);
            }
        });
    }
    //click xoa cong viec sua chua
    deleteRepair = function (data) {
        swalComfirm(lang['_confirm'], lang['_confirm_delete_repair'], function (res) {
            if (res.value) {
                showLoading();
                $.ajax({
                    type: "POST",
                    url: "/c150CM/storno_tabc150_p3",
                    data: { pnFC150: data.PC150, pvCV167: data.PC150 },
                    dataType: "json",
                }).done(function (result) {
                    hideLoading();
                    if (result.status === "success") {
                        self.listOfTabC150C.remove(data);
                        // swalSuccess(lang['_msg_success'], lang['_msg_delete_c150_success']);
                        swalSuccess(undefined, res.message);
                    } else {
                        // swalError(lang['_msg_fail'], lang['_msg_delete_c150_fail']);
                        swalError(undefined, res.message);
                    }
                });
            }
        });
    }
    //mo phieu giao cong viec
    openDeliveryC150CM = function (CB173, FS200, PS250, FC550, PC150, CD153, FC500) {
        self.mota(CB173);
        pdCD153 = (new Date(CD153)).toISOString();
        pvPC150 = PC150;
        showLoading();
        $.ajax({
            type: "GET",
            url: "/c150CM/list_oftabc650l_p10?pnFS200=" + FS200 + "&pnFS250=" + PS250 +
                "&pvFC550=" + FC550 + "&pvFC150=" + PC150 + "&pdCD153=" + pdCD153,
            dataType: "json",
            success: function (res) {
                if (res.status === "success") {
                    self.listOfTabC650LP10(res.data);
                } else {
                    self.listOfTabC650LP10([]);
                }
                hideLoading();
            }
        });
        showLoading();
        $.ajax({
            type: "GET",
            url: "/c150CM/list_oftabc650r_pv?pvFC150=" + PC150 + "&pnFN100=" + 0,
            dataType: "json",
            success: function (res) {
                if (res.status === "success") {
                    self.listOfTabC650RPV(res.data);
                } else {
                    self.listOfTabC650RPV([]);
                }
                hideLoading();
            }
        });
    }

    //giao viec
    insertTabC650 = function (data) {
        swalComfirm(lang['_confirm'], lang['_confirm_delivery_job'], function (res) {
            if (res.value) {
                showLoading();
                $.ajax({
                    type: "POST",
                    url: "/c150CM/insert_tabc650",
                    data: { pnFN100: data.PN100, pvFC150: pvPC150, pnFC500: self.pnFC500(), pdCD651: pdCD153 },
                    dataType: "json",
                }).done(function (result) {
                    if (result.status === "success") {
                        self.listOfTabC650LP10.remove(data);
                        self.listOfTabC650RPV.push(data);
                        // swalSuccess(lang['_msg_success'], lang['_msg_update_success']);
                        swalSuccess(undefined, res.message);
                    } else {
                        // swalError(lang['_msg_fail'], lang['_msg_update_fail']);
                        swalError(undefined, res.message);
                    }
                    hideLoading();
                });
            }
        });
    }
    //huy giao viec
    stornoTabC650 = function (data) {
        swalComfirm(lang['_confirm'], lang['_confirm_cancel_delivery_job'], function (res) {
            if (res.value) {
                showLoading();
                $.ajax({
                    type: "POST",
                    url: "/c150CM/storno_tabc650",
                    data: { pnFN100: data.PN100, pnFC150: pvPC150 },
                    dataType: "json",
                }).done(function (result) {
                    if (result.status === "success") {
                        self.listOfTabC650RPV.remove(data);
                        self.listOfTabC650LP10.push(data);
                        // swalSuccess(lang['_msg_success'], lang['_msg_update_success']);
                        swalSuccess(undefined, res.message);
                    } else {
                        // swalError(lang['_msg_fail'], lang['_msg_update_fail']);
                        swalError(undefined, res.message);
                    }
                    hideLoading();
                });
            }
        });
    }
    //set thời gian vào form
    openEditTime = function (data) {
        self.pnBN404(data.BN104);
        pvPC150 = data.PC150;
    }
    // Cap nhat lai thoi gian du kien
    self.updateTabB400 = function () {
        showLoading();
        $.ajax({
            type: "POST",
            url: "/c150CM/update_coloftable",
            data: {
                pvSCHEMA: 'BNEXC', pvTABNAME: 'C150', pvCOLNAME: 'CN167', pnVALUE: self.pnBN404(),
                pvPRIMARYKEY: 'PC150', pvCONDITION: pvPC150
            },
            dataType: "json",
            success: function (res) {
                closeDialog('#dl_update_time');
                if (res.status === 'success') {
                    self.loadListOfTabC150C();
                    // swalSuccess(lang['_msg_success'], lang['_msg_update_success']);
                    swalSuccess(undefined, res.message);
                } else {
                    // swalError(lang['_msg_fail'], lang['_msg_update_fail']);
                    swalError(undefined, res.message);
                }
            }
        });
    };

    //open dialog image
    openDialogImage = function (data) {
        loadListM650(data.PB050, data.PC150, 0, 2, 'C150', 'image');
    }
    openDialogVideo = function (data) {
        loadListM650(data.FB050, data.FC150, 0, 3, 'C150', 'image')
    }
    openDialogFile = function (data) {
        loadListM650(data.PB050, data.PC150, 0, 1, 'C150', 'file')
    }
    loadListM650 = function (PB050, FC150, FC300, MN654, MV656, name_res) {
        showLoading();
        $.ajax({
            type: "GET",
            url: "/c150CM/lst_oftabm650_p11",
            data: { pnFB050: PB050, pvFC150: FC150, pnFC300: FC300, pnMN654: MN654, pvMV656: MV656 },
            dataType: "json",
        }).done(function (result) {
            if (name_res === 'image') {
                self.listImage(result.data);
            } else {
                self.listFile(result.data);
            }
            hideLoading();
        });
    }
    deleteImage = function (data) {
        deleteM650(data, 'image');
    }
    deleteFile = function (data) {
        deleteM650(data, 'file');

    }
    deleteM650 = function (data, name_res) {
        swalComfirm(lang['_confirm'], lang['_confirm_cancel_delivery_job'], function (res) {
            if (res.value) {
                showLoading();
                $.ajax({
                    type: "POST",
                    url: "/c150CM/storno_tabm650",
                    data: { pnPM650: data.PM650 },
                    dataType: "json",
                }).done(function (result) {
                    if (result.status === "success") {
                        if (name_res === 'image') {
                            self.listImage.remove(data);
                        } else {
                            self.listFile.remove(data);
                        }
                        // swalSuccess('THÀNH CÔNG', 'Cập nhật thành công');
                        swalSuccess(undefined, res.message);
                    } else {
                        // swalError('THẤT BẠI', 'Cập nhật thất bại');
                        swalError(undefined, res.message);
                    }
                    hideLoading();
                });
            }
        });
    }

    //add doi tuong vao danh sach export
    click_add_export = function () {
    };

    openReadMore = function (title, text) {
        self.titleReadMore(title);
        self.textReadMore(text);
    }
    self.applydaterangepicker = function () {
        var arr = str.split(',');
        for (var i = 0; i < arr.length; i++) {
            return $('#' + arr[i] + '').on('apply.daterangepicker', function (ev, picker) {
                arr[i] = picker.startDate.format('MM-DD-YYYY');
            });
        }
    }
};
var c150cm = new C150CMModel();
c150cm.applydaterangepicker();
c150cm.loadLocalStorage();
c150cm.loadListCombTabN850();
c150cm.loadListCombTabN100G();
c150cm.loadListOfTabC150C();
ko.applyBindings(c150cm);

function limitBoxInput(str, key) {
    if (!str) {
        return;
    }
    // str = 'trình hàn trục vít tải mà hết que hàn nay làm phiếu xin lãnh que hàn để tiếp tục công việc. Ipsumy dummy text of the printing and typesetting. Do quá trình hàn trục vít tải mà hết que hàn nay làm phiếu xin lãnh que. Do quá trình hàn trục vít tải mà hết';
    if (key === 'CB173') {
        return (str.length > 190) ? str.substring(0, 180) + "..." : str;
    } else if (key === 'HV201') {
        return (str.length > 120) ? str.substring(0, 105) + "..." : str;
    } else {
        return (str.length > 28) ? str.substring(0, 28) + "..." : str;
    }
}

function checkDate(date1, date2, string, tgdk) {
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    var d3 = new Date();
    if (d1 > d2) {
        return swalError(undefined, string);
    }
    if (d2 > d3 && tgdk !== true) {
        return swalError(lang['_msg_error'], lang['_msg_day_more_now']);
    }
    if (d1 > d3) {
        return swalError(lang['_msg_error'], lang['_msg_day_tgps_more_now']);
    }
}
function checkLengthCB173(input) {
    if (!!input && input.length > 190) {
        return ' read more';
    } else {
        return '';
    }
}
function checkLengthHV201(input) {
    if (!!input && input.length > 120) {
        return ' read more';
    } else {
        return '';
    }
}
