<div class="dl-change-password" id="dl_change_password">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <span class="faci-votes ic-title-dialog"></span>
                        <h3 class="title-dialog"><?= lang('_change_password'); ?></h3>
                        <a href="javascript:void(0)" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                <div class="dialog-report-content">
                    <div class="row">
                        <div class="form-inline">
                            <label><?= lang('_current_password'); ?></label>
                            <input type="password" class="form-control" id="old_password">
                        </div>
                        <div class="form-inline">
                            <label><?= lang('_new_password'); ?></label>
                            <input type="password" class="form-control" id="new_password">
                        </div>
                        <div class="form-inline">
                            <label><?= lang('_Confirm_password'); ?></label>
                            <input type="password" class="form-control" id="confirm_password">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Dialog -->
            <div class="qb-dialog-footer">
                <div class="row justify-content-end">
                    <div class="col-12 text-right">
                        <a href="javascript:void(0)" class="btn-close close-dialog"><?= lang('_btn_close'); ?></a>
                        <a href="javascript:void(0)" class="btn-save" id="btn-save-password"><?= lang('_btn_save'); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
