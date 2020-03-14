/*
 * Author: Toailq
 * Create: 18/01/2018
 */
var V750Model = function () {
    function limitBoxInput(str, num) {
        if (str === null) {
            return;
        }
        return (str.length > num) ? str.substring(0, num) + "..." : str;
    }
    $('input[name="daterange"]').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        "locale": {"format": "DD/MM/YYYY", "separator": " - ", "applyLabel": "Áp dụng", "cancelLabel": "Hủy", "fromLabel": "Từ", "toLabel": "Đến", "customRangeLabel": "Custom",
            "daysOfWeek": ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
            "monthNames": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        }
    });
    openDialog('.btn-form-requirements', '#dialog_requirement');
    
    // Event Click Open Popup Kiem Tra Ton Kho
    openPopupSlider('.btn-check-inventory', '#popup_check_inventory');
    

    var self = this;
    self.sltN100L = ko.observable();
    self.textCombN100L = ko.observable();
    self.pnOFFSET = ko.observable(1);
    self.pnLIMIT = ko.observable(10);
    self.pnDEPID = ko.observable(0);
    self.textEmployee = ko.observable();
    self.idEmployee = ko.observable();
    self.pnFV300 = ko.observable();
    self.pnPV750 = ko.observable();
    self.textCombTabV300 = ko.observable();
    self.listCombTabV750 = ko.observableArray([]);
    self.listOfTabV750 = ko.observableArray([]);
    self.listCombTabV300 = ko.observableArray([]);
    self.listOfEmployee = ko.observableArray([]);
    self.listOfEmployeeSearch = ko.observableArray([]);

    self.loadLocalStorage = function () {

    }

    self.loadListCombTabN100LP4 = function () {
        console.log('----loadListCombTabN850-----');
        $.ajax({
            type: "GET",
            url: "/v750/comb_tabn100l_p4",
            dataType: "json",
            success: function (res) {
                self.listCombTabV750(res.data);
                if (localStorage.getItem('sltN100') === null) {
                    localStorage.setItem('sltN100', res.data[0].VAL);
                    self.textCombN100L(limitStr(res.data[0].LABEL));
                }
            }
        });
    };

    self.loadListOfTabV750 = function (VAL_SLTN100, TEXT_SLTN100) {
        console.log(VAL_SLTN100 + ' - ' + TEXT_SLTN100);
        showLoading();
        if (VAL_SLTN100 !== undefined) {
            self.sltN100L(VAL_SLTN100);
            self.textCombN100L(limitStr(TEXT_SLTN100));
            localStorage.setItem('sltN100L', self.sltN100L());
            localStorage.setItem('textCombN100L', self.textCombN100L());
        } else if (localStorage.getItem('sltN100L') !== null) {
            self.sltN100L(localStorage.getItem('sltN100L'));
            self.textCombN100L(limitStr(localStorage.getItem('textCombN100L')));
        }
        $.ajax({
            type: "GET",
            url: "/v750/lst_oftabv750?pnOFFSET=" + self.pnOFFSET() + "&pnLIMIT=" + self.pnLIMIT() + "&sltN100L=" + self.sltN100L(),
            dataType: "json",
            success: function (res) {
                console.log('----load list listOfTabV750----');
                console.log(res);
                if (res.status === "success") {
                    self.listOfTabV750(res.data);
                }
                hideLoading();
            }
        });
    }

    self.loadDialogRequirement = function () {
        showLoading();
        $.ajax({
            type: "GET",
            url: "/v750/comb_tabv300",
            dataType: "json",
            success: function (res) {
                console.log('----load list comb_tabv300----');
                console.log(res);
                if (res.status === "success") {
                    self.listCombTabV300(res.data);
                }
            }
        });

        $.ajax({
            type: "GET",
            url: "/v750/lst_ofemployee?pnDEPID=" + self.pnDEPID(),
            dataType: "json",
            success: function (res) {
                console.log('----load list lst_ofemployee----');
                console.log(res);
                // if (res.status === "success") {
                // 	self.listOfEmployee(res.data);
                // }
                if (res.status === "success") {
                    var data = [];
                    var length = res.data.length;
                    for (i = 0; i < length; i++) {
                        data.push({VAL: res.data[i].VAL, LABEL: res.data[i].LABEL, TEXT: change_alias(res.data[i].LABEL)})
                    }
                    self.listOfEmployee(data);
                } else {
                    self.listOfEmployee(null);
                }
                hideLoading();
            }
        });
    }

    insertV750 = function () {
        $.ajax({
            type: "POST",
            url: "/v750/insert_tabv750",
            data: {pnFV300: self.pnFV300(),
                // pdVD751: (new Date(endDateReport)).toISOString(),
                // pdVD752: (new Date(startDateReport)).toISOString(),
                // pnVN756: pnVN756,
                pvVV757: 'O',
                // pbVB758: noidung,
                pvVV767: self.textEmployee(),
                pnVN768: self.idEmployee(),
                pvVV770: self.textEmployee()},
            dataType: "json",
        }).done(function (result) {
            console.log('---insertv750---');
            console.log(result);
            hideLoading();
            // if (result.status === "success") {
            // swalSuccess(undefined, res.message);
            //     if (fc500int == 10) {
            //         self.loadListCombTabC150K();
            //     }
            // } else {
            //      swalError(undefined, res.message);
            // }
        });
    }

    // search
    self.search_employee = ko.observable('');
    self.listOfEmployeeSearch = ko.computed(function () {
        var text = self.search_employee();
        var q = change_alias(text);
        return self.listOfEmployee().filter(function (i) {
            return i.TEXT.toLowerCase().indexOf(q) >= 0;
        });
    });

    sltEmployee = function (VAL, LABEL) {
        self.textEmployee(LABEL);
        self.idEmployee(VAL);
        console.log(VAL + ' - ' + LABEL);
    }

    sltCombTabV300 = function (VAL, LABEL) {
        self.textCombTabV300(LABEL);
        self.pnFV300(VAL);
        console.log(VAL + ' - ' + LABEL);
    }
};
var v750 = new V750Model();
v750.loadLocalStorage();
v750.loadListCombTabN100LP4();
v750.loadListOfTabV750();
ko.applyBindings(v750);
