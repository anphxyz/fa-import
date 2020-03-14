<div class="popup-slider" id="dialog-oee-id">
            <div class="popup-slider-content dialog-oee">
                <div class="popup-slider-large-top">
                    <div class="row row-head">
                        <div class="dialog-oee-header">
                            <h5 class="dialog-oee-title"><?= lang('_oee');?></h5>
                            <a href="#" class="close-popup-slider">
                                <span class="faci-close float-right close-slide"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="dialog-oee-body">
                    <div class="popup-slider-large-content">
                        <div class="dialog-oee-content">
						<div class="form-group">
                                <span class="faci-calendar ic-calendar"></span>
                                <div class="dropdown">
                                    <input class="slt-date-th dropdown-toggle" type="button" name="daterangesinger" id="date_oee">
                                </div>
                            </div>
                        </div>
                        <ul class="col-lg-12">
                            <li class="row2">
                                <label class="label-dialog"><?= lang('_time_stop_machine_initiative');?>: </label>
                                <input id="inputDialog" class="form-control input-dialog" data-bind="value : pvNN423" onkeypress="return CheckNumeric()" onkeyup="FormatCurrency(this)">
                            </li>
                            <li class="row1">
                                <label class="label-dialog"><?= lang('_time_stop_machine_passive');?>: </label>
                                <input class="form-control input-dialog" data-bind="value : pvNN424" onkeypress="return CheckNumeric()" onkeyup="FormatCurrency(this)">
                            </li>
                            <li class="row1">
                                <label class="label-dialog"><?= lang('_machine_operating_time');?>: </label>
                                <input class="form-control input-dialog" data-bind="value : pvNN422" onkeypress="return CheckNumeric()" onkeyup="FormatCurrency(this)">
                            </li>
                            <li class="row1">
                                <label class="label-dialog"><?= lang('_total_output_made');?>: </label>
                                <input class="form-control input-dialog" data-bind="value : pvNN430" onkeypress="return CheckNumeric()" onkeyup="FormatCurrency(this)">
                            </li>
                            <li class="row1">
                                <label class="label-dialog"><?= lang('_total_defects');?>: </label>
                                <input class="form-control input-dialog" data-bind="value : pvNN431" onkeypress="return CheckNumeric()" onkeyup="FormatCurrency(this)">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="popup-slider-large-footer">
                    <div class="row justify-content-end">
                        <a href="#" class="btn btn-close close-popup-slider"><?= lang('_btn_close');?></a>
                        <a href="#" class="btn btn-save" data-bind="click: insertOEE"><?= lang('_btn_save');?></a>
                    </div>
                </div>
            </div>
        </div>
