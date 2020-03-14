/*
 * Author: Toailq
 * Create: 26/03/2018
 */
var B050SModule = function () {
    var self = this;
    var d = new Date();
    var startDateReport = (new Date(d.setMonth(d.getMonth() - 1))).toISOString();
    var endDateReport = (new Date()).toISOString();
    self.textCombTabS200 = ko.observable();
    self.listCombTabS200 = ko.observableArray([]);
    self.listTabB050S = ko.observableArray([]);
    self.LIMIT = ko.observable(20);
    self.ordinal = ko.observable(0);

    $("#daterangeB050S").val(formatTime(startDateReport) + " - " + formatTime(endDateReport));
    $('#daterangeB050S').on('apply.daterangepicker', function (ev, picker) {
        startDateReport = picker.startDate.format('MM-DD-YYYY');
        endDateReport = picker.endDate.format('MM-DD-YYYY');
        self.listOfTabB050S();
    });

    self.loadListCombTabS200 = function () {
        $.ajax({
            type: "GET",
            url: "/b050S/comb_tabs200_p4",
            dataType: "json",
            success: function (res) {
                if (!!res.data) {
                    res.data.unshift({VAL: 0, LABEL: lang['_all']});
                    self.listCombTabS200(res.data);
                    if (!localStorage.getItem('valCombTabS200')) {
                        self.textCombTabS200(limitStr(res.data[1].LABEL, 30));
                        localStorage.setItem('textCombTabS200', res.data[0].LABEL);
                        localStorage.setItem('valCombTabS200', res.data[0].VAL);
                    } else {
                        self.textCombTabS200(limitStr(localStorage.getItem('textCombTabS200'), 30));
                    }
                }
            }
        });
    };
    self.listOfTabB050S = function (VAL, LABEL) {
        showLoading();
        if (!!VAL) {
            localStorage.setItem('textCombTabS200', LABEL);
            localStorage.setItem('valCombTabS200', VAL);
            self.textCombTabS200(limitStr(LABEL, 30));
        }
        var url = "/b050S/lst_oftabb050s?pnLIMIT=" + self.LIMIT() + "&pnFS200=" + localStorage.getItem('valCombTabS200') +
                "&pdFRDAT=" + (new Date(startDateReport)).toISOString() + "&pdTODAT=" + (new Date(endDateReport)).toISOString();
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
//            data: {
//                pnFS200: localStorage.getItem('valCombTabS200'),
//                pdFRDAT: (new Date(startDateReport)).toISOString(),
//                pdTODAT: (new Date(endDateReport)).toISOString()
//            },
            success: function (res) {
                if (!!res.data) {
                    console.log(res.data);
                    self.listTabB050S(res.data);
                    $('.qb-pagination.image').doPagination(res.data[0].ROWSS, url, self.LIMIT(), setListOfTabB050S);
                }
                hideLoading();
            }
        });
    }
    setListOfTabB050S = function (res, pgNo) {
        self.listTabB050S(res.data);
        self.ordinal((pgNo - 1) * self.LIMIT());
    }
    setOrdinal = function (index) {
        return index + self.ordinal() + 1;
    }
};

var b050s = new B050SModule();
b050s.loadListCombTabS200();
b050s.listOfTabB050S();
ko.applyBindings(b050s);
function convertInforUpdate(str1, str2) {
    return str1 + ' (' + formatTimeB050S(str2) + ')';
}

function formatTimeB050S(val) {
    if (val !== null) {
        var value = new Date(new Date(val) - (new Date()).getTimezoneOffset() * 60000).toISOString();
        var date = value.substr(0, 10).split("-");
        var time = value.substr(11, 5);
        return date[2] + "/" + date[1] + "/" + date[0] + " " + time;
    }
}

