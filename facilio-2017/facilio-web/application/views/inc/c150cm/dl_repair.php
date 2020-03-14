<div class="qb-dialog" id="dialog_repair">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <span class="faci-votes ic-title-dialog"></span>
                        <h3 class="title-dialog"><?= lang('_work_repair'); ?></h3>
                        <a href="javascript:void(0)" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                <div class="dialog-repair-content">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="form-group">
                                <label><?= lang('_title'); ?> (*)</label>
                                <input type="text" class="form-control title-repair" id="pvCV151">
                            </div>
                        </div>
                        <div class="col-md-2 p-0">
                            <div class="cb-repair">
                                <div class="d-flex flex-row-reverse">
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input"  data-bind="checked: checkBigRepair">
                                        <span class="custom-control-indicator cb-custom"></span>
                                        <span class="custom-control-description lb-repair-big lb-control"><?= lang('_big_repair'); ?></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label><?= lang('_job_description'); ?></label>
                                <textarea class="form-control decription" rows="5" id="plCB173"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-5 no-pd-right">
                            <div class="form-group">
                                <label><?= lang('_machine'); ?> (*)</label><br/>
                                <div class="dropdown">
                                    <input class="slt-select dropdown-toggle" type="text" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="select_may" data-bind="value: search_may, valueUpdate: 'keyup'" autocomplete="off">
                                    <div class="dropdown-menu" data-bind="foreach: listCombTabB050ESearch">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click: loadCombTabS250B.bind($data, VAL, LABEL)"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-3 no-pd-right" id="box_daitu1" data-bind="visible: !checkBigRepair()">
                            <div class="form-group">
                                <label><?= lang('_time_arises'); ?></label>
                                <span class="faci-calendar ic-calendar"></span>
                                <div class="dropdown">
                                    <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" id="thoigianhong">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-3 no-pd-right" id="box_daitu2" data-bind="visible: checkBigRepair">
                            <!-- du kien hoan thanh -->
                            <div class="form-group" hiden>
                                <label><?= lang('_tentative_completion'); ?></label>
                                <div class="dropdown">
                                    <button class="slt-date-th dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textCombtgdk">
                                    </button>
                                    <div class="dropdown-menu" data-bind="foreach: combtgdk">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click: clickSelectTgdk.bind($data, VAL, LABEL)"></a>
                                    </div>
                                </div>
                            </div>
                            <!-- het du kien hoan thanh -->
                        </div>
                        <div class="col-sm-12 col-md-4 no-pd-right">
                            <div class="form-group">
                                <label><?= lang('_class'); ?> (*)</label><br/>
                                <div class="dropdown">
                                    <button class="slt-select dropdown-toggle" type="text" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textRange"></button>
                                    <div class="dropdown-menu" data-bind="foreach: combRange">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click: clickSelectRange.bind($data, VAL, LABEL)"></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-5 no-pd-right">
                            <div class="form-group">
                                <label><?= lang('_part'); ?> (*)</label>
                                <div class="dropdown">
                                    <button class="slt-select dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="select_bophan"></button>
                                    <div class="dropdown-menu" data-bind="foreach: listCombTabS250B">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click: clickCombTabS250B.bind($data, VAL, LABEL)"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-3 no-pd-right" id="box_daitu3" data-bind="visible: checkBigRepair">
                            <div class="form-group">
                                <label><?= lang('_date_of_implementation'); ?></label><br/>
                                <span class="faci-calendar ic-calendar"></span>
                                <div class="dropdown">
                                    <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" id="ngaythuchien">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-3 no-pd-right" id="box_daitu4" data-bind="visible: !checkBigRepair()">
                            <div class="form-group">
                                <label><?= lang('_tentative_completion'); ?></label><br/>
                                <span class="faci-calendar ic-calendar"></span>
                                <div class="dropdown">
                                    <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" id="thoigiandk">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 no-pd-right">
                            <div class="form-group">
                                <label><?= lang('_employee'); ?> (*)</label><br/>
                                <div class="dropdown">
                                    <button class="slt-select dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="nhanvien"></button>
                                    <div class="dropdown-menu" data-bind="foreach: listN100">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click: clickN100.bind($data, VAL, LABEL)"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="prioritize">
                            <div class="col-sm-12 col-md-12">
                                <span class="lb-prioritize"><?= lang('_prioritize'); ?>:&nbsp&nbsp</span>
                                <label class="custom-control custom-radio">
                                    <input id="radio1" name="radio" type="radio" class="custom-control-input" value="1" data-bind="checked: radioRepairC150CM">
                                    <span class="custom-control-indicator rdo-custom"></span>
                                    <span class="custom-control-description lb-control"><?= lang('_priority_array')[0]; ?></span>
                                </label>
                                <label class="custom-control custom-radio">
                                    <input id="radio2" name="radio" type="radio" class="custom-control-input" value="2" data-bind="checked: radioRepairC150CM">
                                    <span class="custom-control-indicator rdo-custom"></span>
                                    <span class="custom-control-description lb-control"><?= lang('_priority_array')[1]; ?></span>
                                </label>
                                <label class="custom-control custom-radio">
                                    <input id="radio3" name="radio" type="radio" class="custom-control-input" value="3" data-bind="checked: radioRepairC150CM">
                                    <span class="custom-control-indicator rdo-custom"></span>
                                    <span class="custom-control-description lb-control"><?= lang('_priority_array')[2]; ?></span>
                                </label>
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" data-bind="checked: checkEndC150CM">
                                    <span class="custom-control-indicator cb-custom"></span>
                                    <span class="custom-control-description lb-control"><?= lang('_end'); ?></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <!-- --------------form ket thuc--------------- -->
                    <div class="form-end" data-bind="visible: checkEndC150CM">
                        <div class="row">
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">
                                    <label><?= lang('_standing_machine'); ?></label><br/>
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" data-bind="checked: maydung">
                                        <span class="custom-control-indicator cb-custom"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">
                                    <label><?= lang('_from'); ?></label><br/>
                                    <span class="faci-calendar ic-calendar"></span>
                                    <div class="dropdown">
                                        <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" data-bind="enable: maydung">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">
                                    <label><?= lang('_to'); ?></label><br/>
                                    <span class="faci-calendar ic-calendar"></span>
                                    <div class="dropdown">
                                        <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" data-bind="enable: maydung">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">
                                    <label><?= lang('_standing_system'); ?></label><br/>
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" data-bind="checked: htdung, enable: maydung">
                                        <span class="custom-control-indicator cb-custom"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">
                                    <label><?= lang('_from'); ?></label><br/>
                                    <span class="faci-calendar ic-calendar"></span>
                                    <div class="dropdown">
                                        <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" data-bind="enable: htdung">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">
                                    <label><?= lang('_to'); ?></label><br/>
                                    <span class="faci-calendar ic-calendar"></span>
                                    <div class="dropdown">
                                        <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" data-bind="enable: htdung">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">

                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">
                                    <label><?= lang('_time_start'); ?></label><br/>
                                    <span class="faci-calendar ic-calendar"></span>
                                    <div class="dropdown">
                                        <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" id="bd_htdung">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 no-pd-right">
                                <div class="form-group">
                                    <label><?= lang('_time_end'); ?></label><br/>
                                    <span class="faci-calendar ic-calendar"></span>
                                    <div class="dropdown">
                                        <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" id="kt_htdung">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label><?= lang('_note'); ?></label>
                                    <textarea class="form-control decription" rows="5" id="plCB173"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Dialog -->
            <div class="qb-dialog-footer">
                <div class="row justify-content-end">
                    <div class="col-12 text-right">
                        <a href="#" class="btn-close close-dialog"><?= lang('_btn_close'); ?></a>
                        <a href="#" class="btn-save" data-bind="click: saveRepairC150CM"><?= lang('_btn_save'); ?></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
