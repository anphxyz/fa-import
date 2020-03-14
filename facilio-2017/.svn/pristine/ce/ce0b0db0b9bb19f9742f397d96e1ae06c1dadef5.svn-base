<div class="qb-dialog" id="dialog_requirement">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <span class="faci-votes ic-title-dialog"></span>
                        <h3 class="title-dialog">Phiếu yêu cầu</h3>
                        <a href="#" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                <div class="dialog-report-content">
                    <div class="box-requirement-one row">
                        <div class="requirement-type col-6">
                            <p>Loại yêu cầu (*)</p>
                            <div class="dropdown">
                                    <input class="slt-select dropdown-toggle" type="text" data-toggle="dropdown" data-bind="textInput : textCombTabV300">
                                    <div class="dropdown-menu" data-bind="foreach: listCombTabV300">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click: sltCombTabV300.bind($data, VAL, LABEL)"></a>
                                    </div>
                                </div>
                        </div>
                        <div class="requirement-date col-6">
							<p>Ngày yêu cần vật tư (*)</p>
                            <div class="form-group">
                                <span class="faci-calendar ic-calendar"></span>
                                <div class="dropdown">
                                    <input class="slt-date-th dropdown-toggle" type="button" name="daterange" id="thoigianhong">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-requirement-one row">
                        <div class="requirement-type group-receiver col-6">
                            <p>Người nhận (*)</p>
                            <div class="dropdown">
                                    <input class="slt-select dropdown-toggle" type="text" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="value: search_employee, valueUpdate: 'keyup', textInput: textEmployee" autocomplete="off">
                                    <div class="dropdown-menu" data-bind="foreach: listOfEmployeeSearch">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click: sltEmployee.bind($data, VAL, LABEL)"></a>
                                    </div>
                                </div>
                        </div>
                        <div class="requirement-date group-meterial col-6">
                            <p>Ngày cần vật tư (*)</p>
                            <div class="form-group">
                                <span class="faci-calendar ic-calendar"></span>
                                <div class="dropdown">
                                    <input class="slt-date-th dropdown-toggle" type="button" name="daterange" id="thoigianhong">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-requirement-note row">
                        <p>Ghi chú</p>
                        <textarea class="col-12"></textarea>
                    </div>
                </div>
            </div>

            <!-- Footer Dialog -->
            <div class="qb-dialog-footer">
                <div class="row justify-content-end">
                    <div class="col-12 text-right">
                        <a href="#" class="btn-close close-dialog"><?= lang('_btn_close'); ?></a>
                        <a href="#javascript:void(0)" class="btn-save" data-bind="click: insertV750"><?= lang('_btn_save'); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
