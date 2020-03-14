/*
 * Author: Toailq
 * Create: 23/01/2018
 */
var height = $("#containerChart").height();
var width = $("#containerChart").width();
var categoriesChart = [''];
var dataSeries;

var B200DBMODULE = function () {
    var self = this;
    var d = new Date();
    var startDateReport = (new Date(d.setMonth(d.getMonth() - 3))).toISOString();
    var endDateReport = (new Date()).toISOString();

    self.pvFC500FAC = ko.observable('BT');
    self.pvFC500EM = ko.observable('BT');
    self.textTabN850 = ko.observable();
    self.pnFN850 = ko.observable();//ma phong ban
    self.groupWork = ko.observable(true);
    self.listCombTabN850 = ko.observableArray([]);//list phong ban

    //even click date
    $('.dateDashBoard').on('apply.daterangepicker', function (ev, picker) {
        if (localStorage.getItem('b200DBActive') === 'EM') {
            startDateReport = picker.startDate.format('MM-DD-YYYY');
            endDateReport = picker.endDate.format('MM-DD-YYYY');
            localStorage.setItem('startDateReportEM', startDateReport);
            localStorage.setItem('endDateReportEM', endDateReport);
            self.loadListOfTabB200EM();
        } else {
            startDateReport = picker.startDate.format('MM-DD-YYYY');
            endDateReport = picker.endDate.format('MM-DD-YYYY');
            localStorage.setItem('startDateReportFAC', startDateReport);
            localStorage.setItem('endDateReportFAC', endDateReport);
            self.loadListOfTabB200FAC();
        }
    });

    /**-----------init funtion------------- */
    //comb FC500
    self.combFC500 = ko.observableArray([
        {VAL: 'BT', LABEL: lang['_maintenance_array'][0]},
        {VAL: 'PM', LABEL: lang['_maintenance_array'][1]},
    ]);
    self.textFC500FAC = ko.observable(self.combFC500()[0].LABEL);
    self.textFC500EM = ko.observable(self.combFC500()[0].LABEL);

    //load trang thai luc cuoi cung
    self.loadLocalStorage = function () {
        $(".dateDashBoard").val(formatTime(startDateReport) + " - " + formatTime(endDateReport));
        if (localStorage.getItem('b200DBActive') !== null && localStorage.getItem('b200DBActive') === 'EM') {
            self.loadListOfTabB200EM();
        } else {
            self.loadListOfTabB200FAC();
        }
    }

    //load list phong ban
    self.loadListCombTabN850 = function () {
        $.ajax({
            type: "GET",
            url: "/c150CM/comb_tabn850",
            dataType: "json",
            success: function (res) {
                self.listCombTabN850(res.data);
                if (localStorage.getItem('pnFN850EM') === null) {
                    self.textTabN850(limitStr(res.data[0].LABEL));
                }
            }
        });
    };

    //load chart cong viec theo nhom
    self.loadListOfTabB200FAC = function (VAL_FC500, TEXT_FC500) {
        showLoading();
        localStorage.setItem('b200DBActive', 'FAC');
        if (localStorage.getItem('startDateReportFAC') !== null) {
            startDateReport = localStorage.getItem('startDateReportFAC');
            endDateReport = localStorage.getItem('endDateReportFAC');
            $(".dateDashBoard").val(formatTime(startDateReport) + " - " + formatTime(endDateReport));
        }
        categoriesChart = [''];
        dataSeries = [];
        self.groupWork(true);
        $("#group_work").addClass('active');
        $("#personal_work").removeClass('active');
        startDateReport = new Date('10-26-2017');
        if (VAL_FC500 !== undefined && typeof (VAL_FC500) === 'string') {
            self.pvFC500FAC(VAL_FC500);
            self.textFC500FAC(TEXT_FC500);
            localStorage.setItem('pvFC500FAC', self.pvFC500FAC());
            localStorage.setItem('textFC500FAC', self.textFC500FAC());
        } else if (localStorage.getItem('pvFC500FAC') !== null) {
            self.pvFC500FAC(localStorage.getItem('pvFC500FAC'));
            self.textFC500FAC(localStorage.getItem('textFC500FAC'));
        }
        $.ajax({
            type: "GET",
            url: "/b200DB/report_oftabb200fac?pdBD201F=" + (new Date(startDateReport)).toISOString()
                    + "&pdBD201T=" + (new Date(endDateReport)).toISOString() + "&pvFC550=" + self.pvFC500FAC(),
            dataType: "json",
        }).done(function (result) {
            if (result.status === "success") {
                var dataColumn1 = [null];
                var dataColumn2 = [null];
                var dataColumn3 = [null];
                var dataColumn4 = [null];

                for (i = 0; i < result.data.length; i++) {
                    categoriesChart.push(result.data[i].NV851);
                    dataColumn1.push(result.data[i].SLDEADR);
                    dataColumn2.push(result.data[i].SLDEADO);
                    dataColumn3.push(result.data[i].SLOPEN);
                    dataColumn4.push(result.data[i].SLFINI);
                }
                categoriesChart.push('');
                dataColumn1.push(null);
                dataColumn2.push(null);
                dataColumn3.push(null);
                dataColumn4.push(null);
                dataSeries = [{
                        name: lang['_name_column_array'][0],
                        data: dataColumn1,
                    }, {
                        name: lang['_name_column_array'][1],
                        data: dataColumn2,
                    }, {
                        name: lang['_name_column_array'][2],
                        data: dataColumn3,
                    }, {
                        name: lang['_name_column_array'][3],
                        data: dataColumn4,
                    }]
                loadChart();
            } else {
                loadChart();
            }
            hideLoading();
        });
    };

    //load chart cong viec theo nhan vien
    self.loadListOfTabB200EM = function (VAL_FN850, TEXT_FN850, VAL_FC500, TEXT_FC500) {
        showLoading();
        localStorage.setItem('b200DBActive', 'EM');
        if (localStorage.getItem('startDateReportEM') !== null) {
            startDateReport = localStorage.getItem('startDateReportEM');
            endDateReport = localStorage.getItem('endDateReportEM');
            $(".dateDashBoard").val(formatTime(startDateReport) + " - " + formatTime(endDateReport));
        }
        categoriesChart = [''];
        dataSeries = [];
        self.groupWork(false);
        $("#group_work").removeClass('active');
        $("#personal_work").addClass('active');
        if (!!VAL_FN850 && typeof (VAL_FN850) === 'number') {
            self.pnFN850(VAL_FN850);
            self.textTabN850(limitStr(TEXT_FN850));
            localStorage.setItem('pnFN850EM', self.pnFN850());
            localStorage.setItem('textTabN850EM', self.textTabN850());
        } else if (localStorage.getItem('pnFN850EM') !== null) {
            self.pnFN850(localStorage.getItem('pnFN850EM'));
            self.textTabN850(limitStr(localStorage.getItem('textTabN850EM')));
        }
        if (!!VAL_FC500 && typeof (VAL_FC500) === 'string') {
            self.pvFC500EM(VAL_FC500);
            self.textFC500EM(TEXT_FC500);
            localStorage.setItem('pvFC500EM', self.pvFC500EM());
            localStorage.setItem('textFC500EM', self.textFC500EM());
        } else if (localStorage.getItem('pvFC500EM') !== null) {
            self.pvFC500EM(localStorage.getItem('pvFC500EM'));
            self.textFC500EM(localStorage.getItem('textFC500EM'));
        }
        $.ajax({
            type: "GET",
            url: "/b200DB/report_oftabb200em?pdBD201F=" + (new Date(startDateReport)).toISOString()
                    + "&pdBD201T=" + (new Date(endDateReport)).toISOString() + "&pvFC550=" + self.pvFC500EM()
                    + "&pnFN850=" + self.pnFN850(),
            dataType: "json",
        }).done(function (result) {
            console.log(result.data);
            if (result.status === "success") {
                var dataColumn1 = [null];
                var dataColumn2 = [null];
                var dataColumn3 = [null];
                var dataColumn4 = [null];

                for (i = 0; i < result.data.length; i++) {
                    categoriesChart.push(result.data[i].HOTEN);
                    dataColumn1.push(result.data[i].SLDEADR);
                    dataColumn2.push(result.data[i].SLDEADO);
                    dataColumn3.push(result.data[i].SLOPEN);
                    dataColumn4.push(result.data[i].SLFINI);
                }
                categoriesChart.push('');
                dataColumn1.push(null);
                dataColumn2.push(null);
                dataColumn3.push(null);
                dataColumn4.push(null);
                dataSeries = [{
                        name: lang['_name_column_array'][0],
                        data: dataColumn1,
                    }, {
                        name: lang['_name_column_array'][1],
                        data: dataColumn2,
                    }, {
                        name: lang['_name_column_array'][2],
                        data: dataColumn3,
                    }, {
                        name: lang['_name_column_array'][3],
                        data: dataColumn4,
                    }]
                loadChart();
            } else {
                categoriesChart = ['', '']
                dataSeries = [{
                        name: lang['_name_column_array'][0],
                        data: dataColumn1,
                    }, {
                        name: lang['_name_column_array'][1],
                        data: dataColumn2,
                    }, {
                        name: lang['_name_column_array'][2],
                        data: dataColumn3,
                    }, {
                        name: lang['_name_column_array'][3],
                        data: dataColumn4,
                    }]
                loadChart();
            }
            hideLoading();
        });

    };
};
var B200DB = new B200DBMODULE();
B200DB.loadListCombTabN850();
B200DB.loadLocalStorage();
ko.applyBindings(B200DB);
