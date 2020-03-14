<div class="qb-dialog" id="dl_oee_maxav">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">
		<form data-bind="submit : updateH450OEE">
            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <span class="faci-votes ic-title-dialog"></span>
                        <h3 class="title-dialog"><?= lang('_highest_average_yield_dl');?></h3>
                        <a href="#" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                    <input class="form-control" data-bind="value : pnHN462" onkeypress="return CheckNumeric()" onkeyup="FormatCurrency(this)">
                </div>

            <!-- Footer Dialog -->
            <div class="qb-dialog-footer">
                    <div class="row justify-content-end">
                        <div class="col-12 text-right">
                            <button class="btn-close close-dialog"><?= lang('_btn_close');?></button>
                            <button type="submit" class="btn-save"><?= lang('_btn_save');?></button>
                        </div>
                    </div>
                </div>
		</div>
</form>
    </div>
</div>
