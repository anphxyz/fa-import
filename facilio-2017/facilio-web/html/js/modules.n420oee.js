/*
 * Author: Toailq
 * Create: 19/01/2018
 */
var N420OEEModel = function () {
    var self = this;

    var date_oee = (new Date()).toISOString();
    self.pnFH200 = ko.observable(0);
    self.pnINTER = ko.observable(0);
    self.pnPN420 = ko.observable();
    self.pdND421 = ko.observable();
    self.pvNN422 = ko.observable();
    self.pvNN423 = ko.observable();
    self.pvNN424 = ko.observable();
    self.pvNN428 = ko.observable();
    self.pvNN430 = ko.observable();
    self.pvNN431 = ko.observable();
    self.pnHN462 = ko.observable();//cap nhat gia tri nang suat TB cao nhat

    self.listComBTabH450 = ko.observableArray([]);//list combtabh450
    self.textComBTabH450 = ko.observable();
    self.listOfTabN420OEE = ko.observableArray([]);//list tabN420OEE

    $('#date_oee').on('apply.daterangepicker', function (ev, picker) {
        date_oee = picker.startDate.format('MM-DD-YYYY h:mm');
    });
    openPopupSlider('.btn-open-oee', '#dialog-oee-id', 'on', '.close-slide');
    openDialog('label.dl_oee_maxav', '#dl_oee_maxav');

    /**-----------init data------------- */
    //load trang thai luc cuoi cung
    self.loadLocalStorage = function () {
    }
    // comb
    self.combTime = ko.observableArray([
        {VAL: 0, LABEL: lang['_time_array'][0]},
        {VAL: 1, LABEL: lang['_time_array'][1]},
        {VAL: 2, LABEL: lang['_time_array'][2]},
        {VAL: 3, LABEL: lang['_time_array'][4]},
        {VAL: 4, LABEL: lang['_time_array'][4]},
        {VAL: 100, LABEL: lang['_time_array'][5]}
    ]);
    self.textTime = ko.observable(limitStr(self.combTime()[0].LABEL));

    //load list phong ban
    self.loadListComBTabH450 = function () {
        $.ajax({
            type: "GET",
            url: "/n420/comb_tabh450",
            dataType: "json",
            success: function (res) {
                console.log('----load list combtabH450----');
                console.log(res);
                if (res.status === "success") {
                    self.listComBTabH450(res.data);
                    self.textComBTabH450(limitStr(res.data[0].LABEL));
                } else {
                    self.textComBTabH450('-----------');
                }
            }
        });
    };
    //load list phong ban
    self.loadListOfTabN420OEE = function (VAL_TABH450, TEXT_TABH450, VAL_TIME, TEXT_TIME) {
        if (VAL_TABH450 !== undefined) {
            self.pnFH200(VAL_TABH450);
            self.textComBTabH450(limitStr(TEXT_TABH450));
            localStorage.setItem('pnFH200', self.pnFH200());
            localStorage.setItem('textComBTabH450', self.textComBTabH450());
        } else if (localStorage.getItem('pnFH200') !== null) {
            self.pnFH200(localStorage.getItem('pnFH200'));
            self.textComBTabH450(limitStr(localStorage.getItem('textComBTabH450')));
        }
        if (VAL_TIME !== undefined) {
            self.pnINTER(VAL_TIME);
            self.textTime(limitStr(TEXT_TIME));
            localStorage.setItem('pnINTER', self.pnINTER());
            localStorage.setItem('textTime', self.textTime());
        } else if (localStorage.getItem('pnINTER') !== null) {
            self.pnINTER(localStorage.getItem('pnINTER'));
            self.textTime(limitStr(localStorage.getItem('textTime')));
        }
        $.ajax({
            type: "GET",
            url: "/n420/list_oftabn420oee?pnFH200=" + self.pnFH200() + "&pnINTER=" + self.pnINTER(),
            dataType: "json",
            success: function (res) {
                console.log('----load list listOfTabN420OEE----');
                console.log(res);
                if (res.status === "success") {
                    self.listOfTabN420OEE(res.data);
                }
            }
        });
    };

    self.updateH450OEE = function () {
        $.ajax({
            type: "POST",
            url: "/n420/update_tabh450oee",
            data: {pnFH200N: self.pnFH200(), pnHN462: self.pnHN462()},
            dataType: "json",
            success: function (res) {
                if (res.status === 'success') {
                    // self.loadListOfTabC150C();
                    // swalSuccess(undefined, undefined, res.message);
                    swalSuccess(undefined, res.message);
                } else {
                    // swalError(res.message);
                    swalError(undefined, res.message);
                }
            }
        });
    }

    self.insertOEE = function () {
        console.log('----' + self.pvNN430() / self.pvNN422());
        $.ajax({
            type: "POST",
            url: "/n420/insert_tabn420oee",
            data: {pnNN422: self.pvNN422(), pnNN423: self.pvNN423(), pnNN424: self.pvNN424(), pnNN428: self.pvNN430() / self.pvNN422(), pnNN430: self.pvNN430()},
            dataType: "json",
            success: function (res) {
                if (res.status === 'success') {
                    // self.loadListOfTabC150C();
                    // swalSuccess(undefined, undefined, res.message);
                    swalSuccess(undefined, res.message);
                } else {
                    // swalError(res.message);
                    swalError(undefined, res.message);
                }
            }
        });
    }
};
var N420OEE = new N420OEEModel();
N420OEE.loadListComBTabH450();
N420OEE.loadListOfTabN420OEE();
ko.applyBindings(N420OEE);
