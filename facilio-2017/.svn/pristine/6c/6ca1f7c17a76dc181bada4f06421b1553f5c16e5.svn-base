<div class="dl-transfer-work" id="dl_transfer_work">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <span class="faci-votes ic-title-dialog"></span>
                        <h3 class="title-dialog"><?= lang('_move_job'); ?></h3>
                        <a href="javascript:void(0)" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                <div class="dialog-report-content">
                    <div class="row">
                        <div class="col-12 form-inline">
                            <label><?= lang('_employee'); ?></label>
                            <div class="dropdown">
                                <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" data-bind="text: textN100M">
                                </button>
                                <div class="dropdown-menu" data-bind="foreach: listTabN100M">
                                    <a class="dropdown-item qb-dropdown-item" data-bind="text: LABEL, click : function(){ $parent.setfn100O($data.VAL, $data.LABEL)}"></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 form-inline">
                            <label><?= lang('_selected_employees'); ?></label>
                            <div class="dropdown">
                                <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" data-bind="text: textN100C">
                                </button>
                                <div class="dropdown-menu" data-bind="foreach: listTabN100C">
                                    <a class="dropdown-item qb-dropdown-item" data-bind="text: LABEL, click : function(){ $parent.setfn100N($data.VAL, $data.LABEL)}"></a>
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
                        <a href="javascript:void(0)" class="btn-close close-dialog"><?= lang('_btn_close'); ?></a>
                        <a href="javascript:void(0)" class="btn-save" data-bind="click: updateConver"><?= lang('_btn_save'); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
