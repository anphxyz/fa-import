<div class="qb-dialog" id="dialog_history_report">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <span class="faci-votes ic-title-dialog"></span>
                        <h3 class="title-dialog"><?= lang('_history_report'); ?></h3>
                        <a href="javascript:void(0)" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                <div class="dialog-history-report-content">
                    <div class="row">
                        <div class="col-md-12">
                            <p><?= lang('_title'); ?>: Ipsumy dummy text of the printing and typesetting.</p>
                        </div>
                    </div>
                    <div data-bind="foreach: listOfTabC300CP5">
                        <div class="row-content">
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <span class="faci-worker ic-row-content"></span>
                                    <label class="lb-vn-th"><?= lang('_made_employee'); ?>: <span class="row-sp-name" data-bind="text: CL347"></span></label><br/>
                                    <label class="lb-nt"><?= lang('_date_created'); ?>: <span class="row-sp-date" data-bind="text: formatTime(CD301)"></span></label>
                                </div>
                                <div class="col-sm-12 col-md-4">
                                    <div class="float-left">
                                        <a href="javascript:void(0)" class="ic-file" data-bind="click: openDialogFile.bind($data)"><span class="faci-file ic-row-content-file"></span></a><span class="count-file" data-bind="text: '(' + DOC + ')'"></span>
                                        <a href="javascript:void(0)" class="ic-image" data-bind="click: openDialogImage.bind($data)"><span class="faci-image ic-row-content-img" style="margin-left: 12px;"></span></a><span class="count-img" data-bind="text: '(' + DOC + ')'">(0)</span><br/>
                                    </div>
                                    <a class="btn-complete" href="javascript:void(0)" data-bind="visible: CN315===100"><?= lang('_complete'); ?></a>
                                </div>
                                <div class="col-sm-12 col-md-2">
                                    <div class="d-flex flex-row-reverse"><!-- $data, FC600, PC300 -->
                                        <a href="javascript:void(0)" class="ic-row-content-del" data-bind="click: deleteReport.bind($data)"><span class="faci-delete ic-delete-row"></span></a>
                                        <a href="javascript:void(0)" class="ic-row-content-edit"><span class="faci-edit ic-edit-row btn-report"  data-bind="click: setFormReport.bind($data)"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
