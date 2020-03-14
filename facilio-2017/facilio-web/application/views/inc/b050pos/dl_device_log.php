<div class="dl-device-log" id="dl_device_log">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <span class="faci-votes ic-title-dialog"></span>
                        <h3 class="title-dialog"><?= lang('_device_log'); ?></h3>
                        <a href="javascript:void(0)" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                <div class="dialog-report-content">
                    <div class="row">
                        <div class="col-12 form-inline">
                            <label><?= lang('_maintenance_type'); ?></label>
                            <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" data-bind="text: textMTYPE">
                            </button>
                            <div class="dropdown-menu" data-bind="foreach: combMTYPE">
                                <a class="dropdown-item qb-dropdown-item" data-bind="text: LABEL, click : function(){ $parent.selectMTYPE($data.VAL, $data.LABEL)}"></a>
                            </div>
                        </div>
                        <div class="col-12 form-inline">
                            <label><?= lang('_from_day'); ?></label>
                            <input class="slt-calendar dropdown-toggle" type="button" name="daterangesinger" id="dateFrDay">
                        </div>
                        <div class="col-12 form-inline">
                            <label><?= lang('_to_day'); ?></label>
                            <input class="slt-calendar dropdown-toggle" type="button" name="daterangesinger" id="dateToDay">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Dialog -->
            <div class="qb-dialog-footer">
                <div class="row justify-content-end">
                    <div class="col-12 text-right">
                        <a href="javascript:void(0)" class="btn-close close-dialog"><?= lang('_btn_close'); ?></a>
                        <a href="javascript:void(0)" class="btn-save" data-bind="click: exportDiary"><?= lang('_btn_save'); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
