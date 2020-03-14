/*
 * Author: Toailq
 * Create: 26/03/2018
 */
var B050BSModule = function () {
    var self = this;
    var d = new Date();
    var startDateReport = (new Date(d.setMonth(d.getMonth() - 1))).toISOString();
    var endDateReport = (new Date()).toISOString();
    self.LIMIT = ko.observable(20);
    self.ordinal = ko.observable(0);

    self.listReportB050BS = ko.observableArray([]);

    $("#daterangeB050BS").val(formatTime(startDateReport) + " - " + formatTime(endDateReport));
    $('#daterangeB050BS').on('apply.daterangepicker', function (ev, picker) {
        startDateReport = picker.startDate.format('MM-DD-YYYY');
        endDateReport = picker.endDate.format('MM-DD-YYYY');
        self.loadListCombTab050bs();
    });

    self.loadListCombTab050bs = function () {
        showLoading();
        var url = "/b050BS/report_oftabb050bs?pnLIMIT=" + self.LIMIT() + "&pdFRDAT=" + (new Date(startDateReport)).toISOString() + "&pdTODAT=" + (new Date(endDateReport)).toISOString();
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (res) {
                if (!!res.data) {
                    self.listReportB050BS(res.data);
                    $('.qb-pagination.image').doPagination(res.data[0].ROWSS, url, self.LIMIT(), setListOfTabB050bs);
                }
                hideLoading();
            }
        });
    };
    setListOfTabB050bs = function (res, pgNo) {
        self.listReportB050BS(res.data);
        self.ordinal((pgNo - 1) * self.LIMIT());
    }
    setOrdinal = function (index) {
        return index + self.ordinal() + 1;
    }
};

var b050bs = new B050BSModule();
b050bs.loadListCombTab050bs();
ko.applyBindings(b050bs);
