/*
 * Author: Toailq
 * Create: 26/03/2018
 */
var B050POSModule = function () {
    var self = this;
    var d = new Date();
    var frDay = (new Date(d.setMonth(d.getMonth() - 1))).toISOString();
    var toDay = (new Date()).toISOString();
    self.FH200 = ko.observable();
    self.pvSearch = ko.observable();
    self.LIMIT = ko.observable(10);
    self.valBV068 = ko.observable();
    self.FB050 = ko.observable();
    self.textN100C = ko.observable();
    self.valN100C = ko.observable();
    self.textN100M = ko.observable();
    self.valN100M = ko.observable();
    self.valPB050 = ko.observable();
    self.valMTYPE = ko.observable();
    self.ordinal = ko.observable(0);

    self.listTabB050POS = ko.observableArray([]);
    self.listTabN100C = ko.observableArray([]);
    self.listTabN100M = ko.observableArray([]);
    self.listTabN100M = ko.observableArray([]);

    self.combBV068 = ko.observableArray([
        {VAL: 'BT', LABEL: lang['_maintenance_array'][0]},
        {VAL: 'PM', LABEL: lang['_maintenance_array'][1]},
        {VAL: 'A', LABEL: lang['_maintenance_array'][2]},
    ]);
    self.textBV068 = ko.observable(limitStr(self.combBV068()[0].LABEL));

    self.combMTYPE = ko.observableArray([
        {VAL: 'A', LABEL: lang['_maintenance_type_array'][0]},
        {VAL: 'P', LABEL: lang['_maintenance_type_array'][1]},
        {VAL: 'B', LABEL: lang['_maintenance_type_array'][2]},
        {VAL: 'C', LABEL: lang['_maintenance_type_array'][3]},
    ]);
    self.textMTYPE = ko.observable(self.combMTYPE()[0].LABEL);

    openDialog('.class-move-job', '#dl_transfer_work');
    openDialog('.class-device-log', '#dl_device_log');

    $("#dateToDay").val(formatTime(toDay));
    $('#dateToDay').on('apply.daterangepicker', function (ev, picker) {
    });
    $("#dateFrDay").val(formatTime(frDay));
    $('#dateFrDay').on('apply.daterangepicker', function (ev, picker) {
    });

    self.loadLocalStorage = function () {
        if (!localStorage.getItem('textBV068')) {
            localStorage.setItem('valBV068', 'BT');
        } else {
            self.textBV068(localStorage.getItem('textBV068'));
        }
    }
    self.loadListCombTabH200MA = function () {
        $.ajax({
            type: "GET",
            url: "/b050POS/list_oftabh200ma",
            dataType: "json",
            success: function (res) {
                if (!!res.data) {
                self.processDataTree(res.data, '.left-content .tree-right')
            }
            }
        });
    };

    self.processDataTree = function (h200Lst, $container) {
        var tree = this.getAllChildWithTarget(h200Lst, 0);
        $($container).treeview({
            data: tree,
            expandIcon: "faci-arrow-right ic-arrow-menu",
            collapseIcon: "faci-arrow-down ic-arrow-menu",
            enableLinks: true,
            selectedColor: "#ffffff",
            selectedBackColor: "#0094fb",
            levels: 3,
            onNodeSelected: function (event, data) {
                self.FH200(data.val);
                self.loadListOfTabB050POS();
            }
        });
    };

    self.getAllChildWithTarget = function (h200Lst, fh200p) {
        return h200Lst.reduce(function (bigTree, h200) {
            var isSelected = false;
            if (+h200.VAL === self.currentFH200) {
                tree_label.innerText = h200.LABEL;
                isSelected = true;
            }
            if (h200.FH200P === fh200p) {
                var treeNode = {
                    text: '<span>' + h200.LABEL + '</span>',
                    val: h200.VAL,
                    state: {
                        selected: isSelected
                    }
                },
                        nodes = self.getAllChildWithTarget(h200Lst, h200.VAL);
                if (!!nodes.length)
                    treeNode.nodes = nodes;
                bigTree.push(treeNode);
            }
            return bigTree;
        }, []);
    };

    self.loadListCombTabN100C = function () {
        $.ajax({
            type: "GET",
            url: "/b050POS/comb_tabn100c",
            dataType: "json",
            success: function (res) {
                if (!!res.data) {
                self.listTabN100C(res.data);
                self.textN100C(limitStr(res.data[1].LABEL, 19));
            }
            }
        });
    };
    self.loadListCombTabN100M = function (val) {
        var FB050 = 0;
        if (!!val)
            FB050 = val.PB050;
        self.valPB050(FB050);
        $.ajax({
            type: "GET",
            url: "/b050POS/comb_tabn100m",
            data: {pnFB050: FB050},
            dataType: "json",
            success: function (res) {
                self.listTabN100M(res.data);
                if (!!res.data)
                    self.textN100M(limitStr(res.data[1].LABEL, 19));
                else
                    self.textN100M(limitStr('Không có nhân viên'));
            }
        });
    };
    self.loadListOfTabB050POS = function (VAL, LABEL) {
        // showLoading();
        if (!!VAL) {
            localStorage.setItem('textBV068', LABEL);
            localStorage.setItem('valBV068', VAL);
            self.textBV068(LABEL);
        }
        var url = "/b050POS/lst_oftabb050bs/?pnLIMIT=" + self.LIMIT() + "&pnFH200=" + self.FH200() + "&pvBV068=" + localStorage.getItem('valBV068');
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
//            data: {
//                pvBV068: localStorage.getItem('valBV068'),
//                pnFH200: self.FH200(),
//            },
            success: function (res) {
                hideLoading();
                if (!!res.data) {
                    self.listTabB050POS(res.data);
                    $('.qb-pagination.image').doPagination(res.data[0].ROWSS, url, self.LIMIT(), setListOfTabB050POS);
                }
            }
        });
    }
    setListOfTabB050POS = function (res, pgNo) {
        self.listTabB050POS(res.data);
        self.ordinal((pgNo - 1) * self.LIMIT());
    }
    setOrdinal = function (index) {
        return index + self.ordinal() + 1;
    }
    self.setfn100O = function (VAL, LABEL) {
        if (!!VAL) {
            self.textN100M(LABEL);
            self.valN100M(VAL);
        }
    }
    self.setfn100N = function (VAL, LABEL) {
        if (!!VAL) {
            self.textN100C(LABEL);
            self.valN100C(VAL);
        }
    }
    self.updateConver = function () {
        $.ajax({
            type: "POST",
            url: "/b050POS/update_tabn100_p6",
            dataType: "json",
            data: {
                pnFB050: self.valPB050(),
                pnPN100N: self.valN100C(),
                pnPN100O: self.valN100M(),
            },
            success: function (res) {
//                console.log(res);//res.data = 1;
                if (!!res.data) {
                    // swalSuccess(undefined, lang['_update_success']);
                    swalSuccess(undefined, res.message);
                }else{
                    // swalError(undefined, lang['_update_fail']);
                    swalError(undefined, res.message);
                }
            }
        });
    }
    self.selectMTYPE = function (VAL, LABEL) {
        if (!!VAL) {
            self.textMTYPE(LABEL);
            self.valMTYPE(VAL);
        }
    }
    self.setFB050 = function (data) {
        var FB050 = 0;
        if (!!data)
            FB050 = data.PB050;
        self.valPB050(FB050);
    }
    self.exportDiary = function () {
        $.ajax({
            type: "GET",
            url: "/b050POS/hist_oftabb050",
            dataType: "json",
            data: {
                pnFB050: self.valPB050(),
                pdCD153F: (new Date(frDay)).toISOString(),
                pdCD153T: (new Date(toDay)).toISOString(),
                pvMTYPE: self.valMTYPE(),
            },
            success: function (res) {
//                console.log(res);//res.data = 1;
            }
        });
    }



};
var b050pos = new B050POSModule();
b050pos.loadLocalStorage();
b050pos.loadListCombTabH200MA();
b050pos.loadListOfTabB050POS();
b050pos.loadListCombTabN100C();
b050pos.loadListCombTabN100M();
ko.applyBindings(b050pos);